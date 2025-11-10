import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'listado-componnete',
  imports: [],
  templateUrl: './listado-componnete.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoComponnete {

  listName= input.required<string>();

  proyectos= input.required<Proyecto[]>();
}
