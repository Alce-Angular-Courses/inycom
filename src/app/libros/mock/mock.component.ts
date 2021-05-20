import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'iny-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.scss']
})
export class MockComponent implements OnInit {
  clave: string
  message: string
  libros: Array<Libro>
  constructor(private ls: LibrosService) { }

  ngOnInit(): void {
    this.message = 'De que quieres buscar los libros?'
    this.libros = []
  }
  
  onClickBuscar() {
    if(!this.clave) {
      return
    }
    this.libros = this.ls.getMock(this.clave)
    console.log('Resultados', this.libros)
  
  }

  async onClickBuscarAsync() {
    if(!this.clave) {
      return
    }
     
    /* this.ls.getMockAsync(this.clave)
      .then( (resp: Array<Libro>) => { this.libros = resp})
      .catch ( (error) => {console.log(error)})
    } */

    try {
      this.libros = await this.ls.getMockAsync(this.clave)
    } catch (error) {
      console.log(error)
    }
    
  }

  onClickBuscarRx() {
    if(!this.clave) {
      return
    }
  
    this.ls.getMockRx(this.clave).subscribe(
      (resp: Array<Libro>) => this.libros = resp
    )

  }


} 
