import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'iny-by-service',
  templateUrl: './by-service.component.html',
  styleUrls: ['./by-service.component.scss']
})
export class ByServiceComponent implements OnInit {

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
  }

  onClickBuscarRx() {
    if(!this.clave) {
      return
    }
    this.ls.getGoogleRx(this.clave).subscribe(
      (resp: Array<Libro>) => this.libros = resp
    )
  }

}
