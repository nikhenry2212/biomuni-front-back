import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from './service/weather.service';
import { Weather } from './../../model/weather.model'
import { ConfirmationService, ConfirmEventType, Message, MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { AtivarSpliklerService } from './service/ativar-splikler.service';
import { WeatherPost } from 'src/app/model/weather-post.model';

@Component({
  selector: 'app-temperatura-solo',
  templateUrl: './temperatura-solo.component.html',
  styleUrls: ['./temperatura-solo.component.css']
})
export class TemperaturaSoloComponent implements OnInit {

  loading: boolean = false;


  hour: any ='';
  date: any ='';

  url: any;
  formWeather: FormGroup = new FormGroup({
    region: new FormControl('', [Validators.required]),
  });
  city: any = '';
  temp: any = 0;
  icon: any = '';
  description: any = ''
  country: any = '';
  res: any | undefined;
  coord:any = '';
  containerInfo = false;

  status: any = '';
  urlSprinkler: any = '';
  latSprinkler: any;
  lonSprinkler: any;
  

  values: any;
  alertErro: boolean = false;
  error: any;
  msgs: Message[] = [];

  activateSprinkler: WeatherPost={
    id: +Date.now(),
    hour: this.hour,
    date: this.date,
    country:this.country,
    status:this.status,
    city: this.city,
    urlSprinkler: this.urlSprinkler
  };

  // hourFunction:any

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private weatherService: WeatherService,
    private ativarSprinklerService: AtivarSpliklerService
  ) { }




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
      this.containerInfo = true;
      // setTimeout(() => {this.loading = false},2000)

      this.res = res
      console.log(this.res);
  
      this.city = res.name;
      this.icon = res.weather.map(item => item.icon);
      this.url = `http://openweathermap.org/img/w/${this.icon}.png`
      this.description = res.weather.map(item => item.description);
      this.temp = res.main.temp.toPrecision(2);
      this.country = res.sys.country;
      this.status = "sprinkler ativado";
      this.coord = res.coord


      this.latSprinkler = res.coord.lat
      this.lonSprinkler = res.coord.lon
      this.urlSprinkler = `https://www.google.com.br/maps/@${this.latSprinkler},${this.lonSprinkler},15z`

      console.log(this.urlSprinkler);
      

      console.log('método acima',this.activateSprinkler);
    
      this.activateSprinkler={
        id: +Date.now(),
        hour: this.hour,
        date: this.date,
        country:this.country,
        status:this.status,
        city: this.city,
        urlSprinkler: this.urlSprinkler
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
  // https://www.google.com.br/maps/@-

  hourCurrent(): void {
    setInterval(() => {
      this.getHours();
    }, 1000)
  }

  activateSprikler() {
      this.ativarSprinklerService.create(this.activateSprinkler).subscribe((res:WeatherPost)=> {
      console.log(res);
      
    })
    

  }

  ngAfterViewInit(): void {
    this.hourCurrent();
  }
  openModalConfirmation() {
    this.confirmationService.confirm({
      message: `Você deseja ativar o splinkler na cidade ${this.city} - ${this.country} 🤔?`,
      header: 'Confirme',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.activateSprikler()
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: `Sprinkler ativo na cidade ${this.city} - ${this.country} na hora : ${this.hour} 🚿` });
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
      }
    });
  }
  // ngOnChanges(): void {

  //   // console.log(this.date.toLocaleDateString('PT-BR'))

  // }

}
