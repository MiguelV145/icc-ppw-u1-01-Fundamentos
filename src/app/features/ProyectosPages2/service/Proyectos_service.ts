import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor() { }

  proyectos= signal<Proyecto[]>([{
    id:1, nombre:'Proyecto A',
    description: 'descipcion'
  }]);

  addProyecto (newPRoyecto: Proyecto){
    this.proyectos.set([...this.proyectos(), newPRoyecto]);
  }
}
