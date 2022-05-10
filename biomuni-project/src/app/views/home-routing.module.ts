import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { TemperaturaSoloComponent } from "./temperatura-solo/temperatura-solo.component";
import { ConnectDisconectComponent } from "./connect-disconect/connect-disconect.component";
import { ReleaseDronesComponent } from "./release-drones/release-drones.component";
import { ScheduleComponent } from "./schedule/schedule.component";




const routes: Routes = [
    {
    path:'' , 
    component:HomeComponent
},
{
    path: "temperatura-solo",
    component: TemperaturaSoloComponent
  },
  {
    path: "connect-disconnect",
    component: ConnectDisconectComponent
  },
  {
    path: "release-drones",
    component: ReleaseDronesComponent
  },
  {
    path: "schedule",
    component: ScheduleComponent
  },
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule {}