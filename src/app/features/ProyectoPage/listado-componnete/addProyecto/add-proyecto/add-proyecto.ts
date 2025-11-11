import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-add-proyecto',
  imports: [],
  templateUrl: './add-proyecto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProyecto {
listName() {
throw new Error('Method not implemented.');
}

  name=signal ('')
  descripcion= signal('')

  proyectos= signal<Proyecto[]>([{
    id:1, nombre:'Proyecto A',
    description: 'descipcion'
  }]);

  newPRoyecto =output <Proyecto>();
  removeProyecto=output <number>();


  deletProyecto(id: number){
    this.removeProyecto.emit(id);

  }
  
   changeName (value: string ){
    this.name.set(value)
  }

  changeDescripcion(value: string){
    this.descripcion.set(value);

  }
  addProyecto(){
    const newProyecto: Proyecto ={
      id: Math.floor(Math.random() *1000),
      nombre: this.name(),
      description: this.descripcion()

    };
    this.newPRoyecto.emit(newProyecto);
    this.name.set('');
    this.descripcion.set('');
    
  }  

  deleteProyecto(){

  }
 }
