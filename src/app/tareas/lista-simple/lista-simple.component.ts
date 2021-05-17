import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'iny-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.scss']
})
export class ListaSimpleComponent implements OnInit {
  tarea: Tarea
  tareas: Array<Tarea>
  constructor() { }

  ngOnInit(): void {
    this.tarea = new Tarea()
    this.tareas = []
  }

  onClickGuardar() {
    if(!this.tarea.nombre) {
      return
    }
    this.tareas.push(this.tarea)
    this.tarea = new Tarea()
    console.log(this.tareas)
  }

  onChangeCompleted() {
    console.log(this.tareas)
  }

  onClickBorrar(i: number) {
    this.tareas.splice(i,1)
    console.log(this.tareas)
  }

}
