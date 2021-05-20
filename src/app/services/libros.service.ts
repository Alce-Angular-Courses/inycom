import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libro';
import { LIBROS } from '../models/libros.data';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  urlBase: string;
  constructor(private http: HttpClient) { 
    this.urlBase = environment.urlGoogle
  }

  getMock(clave: string): Array<Libro> {
    return LIBROS
  }

  getMockAsync(clave: string): Promise<Array<Libro>> {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(LIBROS)
      }, 1000);
    })
  }

  getMockRx(clave: string): Observable<Array<Libro>>{
    return new Observable( subscribe => {
      setTimeout(() => {
        subscribe.next(LIBROS)
      }, 1000);
    }) 

  }

  getGoogle(clave: string): Promise<any> {
    return this.http.get(this.urlBase+clave).toPromise()
  }

  getGoogleRx(clave: string): Observable<Array<Libro>> {
    return this.http.get(this.urlBase+clave)
      .pipe(
        map( (resp: any) => {
          return resp.items.map(
            item => {
              return {
                id: item.id,
                titulo: item.volumeInfo.title,
                autor: item.volumeInfo.authors,
                fecha: item.volumeInfo.publishedDate
              }
            }
          )
        })
      )
  }
}
