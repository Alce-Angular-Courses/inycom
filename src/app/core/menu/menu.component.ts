import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iny-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: Array<{path:string, nombre: string}>
  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {path:'home', nombre: 'Inicio'},
      {path:'tareas', nombre: 'Tareas'},
      {path:'cursos', nombre: 'Cursos'},
      {path:'about', nombre: 'About'}
    ]
  }

}
