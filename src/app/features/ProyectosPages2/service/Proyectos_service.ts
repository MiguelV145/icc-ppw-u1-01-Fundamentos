import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  constructor() {
    effect(()=> {
      const data = this.proyectos();
      console.log(data);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    });
  }


  private readonly STORAGE_KEY ='proyectosApp';

  proyectos=signal <Proyecto[]>(this.loadProyectos());

  private loadProyectos(): Proyecto[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data): [{
      id:1, nombre:'Proyecto A',
      description: 'descipcion'
    }]
  }

  

  //proyectos= signal<Proyecto[]>([{
    //id:1, nombre:'Proyecto A',
    //description: 'descipcion'
  //}]);
//
  addProyecto (newPRoyecto: Proyecto){
    this.proyectos.set([...this.proyectos(), newPRoyecto]);
  }


  removeProyecto(){
     this.proyectos.set(this.proyectos().slice(1));
    
  }
}

