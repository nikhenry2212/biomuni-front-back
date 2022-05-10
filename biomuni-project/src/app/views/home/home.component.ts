import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  icon: string[]=['pi pi-sun','pi pi-book','pi pi-send','pi pi-clock'];
  // content: string[]=["Temperatura do solo"]
  title: string[]=['Temperatura do solo','Registros/Tabelas','Liberar drones','Agendar'];
  ativo = true;
  constructor() { }

  ngOnInit(): void {
  }

}
