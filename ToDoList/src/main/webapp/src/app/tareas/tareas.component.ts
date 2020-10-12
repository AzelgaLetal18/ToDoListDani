import { Component, OnInit } from '@angular/core';
import { TareaService } from '../tarea.service';



@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {


  public tareas;

  constructor(
    private service: TareaService
  ) { }

  ngOnInit(): void {
    this.service.findAll()
    .subscribe(response=>{
      this.tareas = response;
    });
  }

}
