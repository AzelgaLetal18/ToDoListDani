import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private uri = 'http://localhost:9000/ListaTareas';

  constructor(
    private http: HttpClient
  ) {}

  public save(tareas){
    return this.http.post(this.uri + '/tareas', tareas);

  }

  public findAll(){
    return this.http.get(this.uri + '/tareas');
  }

  public find(idTarea){
    return this.http.get(this.uri + '/tareas/' + idTarea);
  }

}
