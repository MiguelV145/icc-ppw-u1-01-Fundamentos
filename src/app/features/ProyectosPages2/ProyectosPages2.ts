import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { ProyectosService } from './service/Proyectos_service';
import { ListadoComponnete } from "../ProyectoPage/listado-componnete/listado-componnete";
import { AddProyecto } from '../ProyectoPage/listado-componnete/addProyecto/add-proyecto/add-proyecto';

@Component({
  selector: 'app-proyectos-pages2',
  imports: [ListadoComponnete, AddProyecto],
  templateUrl: './ProyectosPages2.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosPages2 { 


  proyectosService = inject(ProyectosService);

  

}
