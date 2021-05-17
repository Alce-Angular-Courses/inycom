import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iny-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  autor: string
  hoy: Date

  constructor() { 
    this.autor = 'alejandro cerezo'
    this.hoy = new Date()
  }

  ngOnInit(): void {
  }

}
