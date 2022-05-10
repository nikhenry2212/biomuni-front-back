import { Component, OnInit } from '@angular/core';
import { ActivityDroneService } from '../release-drones/service/activity-drone.service';
import { AtivarSpliklerService } from '../temperatura-solo/service/ativar-splikler.service';


@Component({
  selector: 'app-connect-disconect',
  templateUrl: './connect-disconect.component.html',
  styleUrls: ['./connect-disconect.component.css'],
})
export class ConnectDisconectComponent implements OnInit {

  load = false;
  loading: boolean = true;
  activityValues: number[] = [0, 100];
  data1:any;
  data: any ;
  country: any;
  date: any;
  hour:any;
  status: any;
  id:any;
  coord:any;
  urlDrones:any;
  urlSprinkler:any;

  latDrone:any;
  lonDrone:any;
  latSprikler:any;
  lonSprinkler:any;
  
  constructor(
    private activityDroneService:ActivityDroneService,
    private ativarSpliklerService:AtivarSpliklerService) {}

    getListDronesActivity(): void{
      this.load = true;
      this.activityDroneService.getDrone().subscribe((res:any) =>{
        setTimeout(() => {
          this.data1 = res
          this.load = false;

        },2000)
        
      })
     
    }


    getlistActiveSprinkler(){
      
      this.ativarSpliklerService.getSprinkler().subscribe((res => {
        this.load = true;
        setTimeout(() =>{
          this.data = res
          this.load = false;

        },2000)
        
      }))
    }

  ngOnInit() {
    this.getlistActiveSprinkler();
    this.getListDronesActivity();
   
  }
}
