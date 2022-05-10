import { InputTextModule } from 'primeng/inputtext';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import {Message} from 'primeng/api';
import { DronePost } from 'src/app/model/weather-post.model';
import { Weather } from 'src/app/model/weather.model';
import { WeatherService } from '../temperatura-solo/service/weather.service';
import { ActivityDroneService } from './service/activity-drone.service';




@Component({
  selector: 'app-release-drones',
  templateUrl: './release-drones.component.html',
  styleUrls: ['./release-drones.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ReleaseDronesComponent implements OnInit {

  loading: boolean = false;
  modal: any = false;
  values: string = "deu certo"
  msgs: Message[] = [];

  
  // loading: boolean = false;


  hour: any ='';
  date: any='';
  status:any='drone ativo'

  url: any;
  formWeather: FormGroup = new FormGroup({
    region: new FormControl('', [Validators.required]),
  });
  city: string = '';
  temp: any = 0;
  icon: any = '';
  description: any = ''
  country: any = '';
  res: any | undefined;
  coord: any = 0;
  containerInfo = false;
  urlDrone: any = '';
  latDrone: any;
  lonDrone: any;
  

  // values: any;
  alertErro: boolean = false;
  error: any;

  activateDrone: DronePost={
    id:Date.now(),
    hour: this.hour,
    date: this.date,
    country:this.country,
    status:this.status, 
    city:this.city,
    urlDrone: this.urlDrone
  };
  // msgs: Message[] = [];

  constructor(
    private confirmationService:ConfirmationService,
    private messageService: MessageService,
    private weatherService: WeatherService,
    private activityDroneService:ActivityDroneService) { }

    getHours = () => {
      const date = new Date()
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()
      const hour = hours < 10 ? `0${hours}` : hours
      const minute = minutes < 10 ? `0${minutes}` : minutes
      const second = seconds < 10 ? `0${seconds}` : seconds
      this.hour = `${hour}:${minute}`
    }
  
    formatDate() {
      let date = new Date().toLocaleDateString('pt-BR');
      this.date = date;
    }
    ngOnInit(): void {
  
      this.formatDate();
      this.hourCurrent();
      this.ngAfterViewInit();
    }
  
    getWeather() {
  
      this.weatherService.getWeather(this.formWeather.value.region).subscribe((res: Weather) => {
        this.loading = true;
        this.containerInfo=true;
          // setTimeout(() => {this.loading = false},2000)
    
        this.res = res
        console.log(this.res);
        
        this.city = res.name;
        this.icon = res.weather.map((item:any) => item.icon);
        this.url = `http://openweathermap.org/img/w/${this.icon}.png`
        this.description = res.weather.map((item:any) => item.description);
        this.temp = res.main.temp.toPrecision(2);
        this.country = res.sys.country;
        this.coord = res.coord;

        this.latDrone = res.coord.lat
        this.lonDrone = res.coord.lon
        this.urlDrone = `https://www.google.com.br/maps/@${this.latDrone.toString()},${this.lonDrone.toString()},15z`
  
        console.log(this.urlDrone);
        console.log(this.coord);
        let id = Number(Date.now());
        this.activateDrone={
          id:id,
          hour: this.hour,
          date: this.date,
          country:this.country,
          status:this.status,
          city:this.city,
          urlDrone: this.urlDrone

        };
        this.loading = false;
      }, (err: HttpErrorResponse) => {
        this.containerInfo = false;
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.alertErro = true;
          setTimeout(() => {
            this.alertErro = false;
  
          }, 2000)
        }, 2000)
        console.log(err);
      })
    }
    hourCurrent(): void {
      setInterval(() => {
        this.getHours();
      }, 1000)
    }
    ngAfterViewInit(): void {
      this.hourCurrent();
  
    }
    activityDrone(){
      this.activityDroneService.create(this.activateDrone).subscribe((res:DronePost)=>{
        console.log(res);
        
      })
    }

    openModalConfirmation() {
    this.confirmationService.confirm({
        message: `Gostaria de ativar um drone na cidade ${this.city} - ${this.country} 🤔?`,
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.activityDrone();
            this.messageService.add({severity:'info', summary:'Confirmed', detail:`Drone ativado na cidade ${this.city} - ${this.country} na hora : ${this.hour} 🚀`});
        },
        reject: (type:any) => {
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                break;
            }
        }
    });
}

}
