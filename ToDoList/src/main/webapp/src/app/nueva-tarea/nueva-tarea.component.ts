import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {

  public tarea;
  public descripcion;

  constructor(
    private tareaService: TareaService,
    private router: Router
  ) { }

  ngOnInit(): void {}

public enviar(){
  const tarea = {
    "nombre": this.tarea,
    "descripcion": this.descripcion,
    "terminado": false
  };


  this.tareaService.save(tarea)
      .subscribe(response => {
        this.router.navigate(['/tareas']);
      });
}

}
