import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-perfil-pages',
  imports: [],
  templateUrl: './perfilPages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilPages {

  name = signal('Juan');
  lastName = signal('Pérez');
  age = signal(30);

  getFullName() {
    return '${this.name()} ${this.lastName()} con edad ${this.age()} años';
  }


  changeData() {
    this.name.set('Ana');
    this.lastName.set('Gonzales');
    this.age.set(25);
  }


  changeAge() {
    this.age.set(18);
  }

  resetData() {
    this.name.set('Juan');
    this.lastName.set('Pérez');
    this.age.set(30);
  }

 }
