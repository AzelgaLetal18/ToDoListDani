import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/tarea',
    pathMatch: 'full'
  },
  {
    path: 'tareas',
    component: TareasComponent
  },
  {
    path: 'nueva-tarea',
    component: NuevaTareaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
