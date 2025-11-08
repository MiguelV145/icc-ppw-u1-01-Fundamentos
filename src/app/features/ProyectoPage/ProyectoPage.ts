import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-proyecto-page',
  imports: [],
  templateUrl: './ProyectoPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectoPage {



  name=signal ('')
  descripcion= signal('')

  proyectos= signal<Proyecto[]>([{
    id:1, nombre:'Proyecto A',
    description: 'descipcion'
  }]);

  changeName (value: string ){
    this.name.set(value)
  }

  changeDescripcion(value: string){
    this.descripcion.set(value);

  }

  addProyecto(){
    const newProyecto: Proyecto ={
      id: this.proyectos().length +1,
      nombre: this.name(),
      description: this.descripcion()

    };

    this.proyectos.set([...this.proyectos(), newProyecto]);
    this.name.set('');
    this.descripcion.set('');
  }



}
