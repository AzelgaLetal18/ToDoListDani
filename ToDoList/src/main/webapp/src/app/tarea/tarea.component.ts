import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input() public tarea;

  constructor() { }

  ngOnInit(): void {
    console.log(this.tarea);
    
  }

}
