import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectDisconectComponent } from './views/connect-disconect/connect-disconect.component';
import { HomeComponent } from './views/home/home.component';
import { ReleaseDronesComponent } from './views/release-drones/release-drones.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { TemperaturaSoloComponent } from './views/temperatura-solo/temperatura-solo.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
