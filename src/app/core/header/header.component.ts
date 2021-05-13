import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iny-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  titulo: string
  logo: string
  constructor() { 
    this.titulo = 'Curso de Angular'
    this.logo = '../../../assets/logo.svg'
  }

  ngOnInit(): void {
  }

}
