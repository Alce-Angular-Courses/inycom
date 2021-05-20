import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { StoreTareasService } from 'src/app/services/store-tareas.service';

@Component({
  selector: 'iny-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.scss']
})
export class ListaSimpleComponent implements OnInit {
  tarea: Tarea
  tareas: Array<Tarea>
  // private store: string;
  constructor(private st: StoreTareasService) { }

  ngOnInit(): void {
    // this.store = 'Tareas'

    this.st.store$.subscribe(
      (data: Array<Tarea>) => this.tareas = data
    )
    
    this.tarea = new Tarea()
    this.tareas = this.st.getTareas()
    // localStorage.getItem(this.store) ? 
    // JSON.parse(localStorage.getItem(this.store)) : []
  }

  onClickGuardar() {
    if(!this.tarea.nombre) {
      return
    }
    this.tareas.push(this.tarea)
    this.tarea = new Tarea()
    this.save()
  }

  onChangeCompleted() {
    this.save()
  }

  onClickBorrar(i: number) {
    this.tareas.splice(i,1)
    this.save()
  }

  private save() {
    this.st.setTareas(this.tareas)
    // localStorage.setItem(this.store, JSON.stringify(this.tareas))
    // console.log(this.tareas)
  }

}
