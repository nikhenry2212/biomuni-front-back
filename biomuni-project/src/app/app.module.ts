import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import * as i3 from "@angular/cdk/scrolling";
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ConfirmDialogModule} from 'primeng/confirmdialog';




import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
// 
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmationService, MessageService} from 'primeng/api';

import { CardComponent } from './components/card/card.component';
import { TemperaturaSoloComponent } from './views/temperatura-solo/temperatura-solo.component';
import { ConnectDisconectComponent } from './views/connect-disconect/connect-disconect.component';
import { ReleaseDronesComponent } from './views/release-drones/release-drones.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { FullCalendarModule } from '@fullcalendar/angular';





import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { LoadingComponent } from './components/loading/loading.component'; // a plugin!

const components = [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  CardComponent,
  TemperaturaSoloComponent,
  ConnectDisconectComponent,
  ReleaseDronesComponent,
  ScheduleComponent,
  LoadingComponent
]

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    [...components]
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    AvatarModule,
    ButtonModule,
    AvatarGroupModule,
    ProgressSpinnerModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    FullCalendarModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


    // CommonModule,
    // FormsModule,
    // FullCalendarDemoRoutingModule,
    // FullCalendarModule,
    // DialogModule,
    // InputTextModule,
    // CalendarModule,
    // CheckboxModule,
    // ButtonModule,
    // TabViewModule,
    // AppDemoActionsModule,
    // AppCodeModule
    
  
    
  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
