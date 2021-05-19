import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'iny-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  tareas: Array<Tarea>
  private store: string
  constructor() { }

  ngOnInit(): void {
    this.store = 'Tareas'
    this.tareas = localStorage.getItem(this.store) ? 
      JSON.parse(localStorage.getItem(this.store)) : []

  }

  onAddTarea(tarea: Tarea) {
    if(!tarea.nombre) {
      return
    }
    this.tareas.push(tarea)
    this.save()

  }

  onChangeTarea(i: number) {
    console.log('Respuesta a ', i)
    this.tareas[i].isCompleted = !this.tareas[i].isCompleted
    this.save()
  }
  
  
  onDeleteTarea(i: number) {
    this.tareas.splice(i, 1)
    this.save()

  }

  private save() {
    localStorage.setItem(this.store, JSON.stringify(this.tareas))
    console.log(this.tareas)
  }
}
