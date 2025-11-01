import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-home-pages',
  imports: [],
  templateUrl: './homePages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePages {
  constructor() {

    setInterval(()=>{
      console.log('*');
      this.counterSignal.update((v) => v +1);
      
    }, 1000);
  }

  counter =0;
  counterSignal =signal(0);
  changeValue(value: number){
    this.counter += value;
    this.counterSignal.update((current) => current +value);
    
  }

  restarValue(value: number){
    this.counter -= value;
    this.counterSignal.update((current) => current - value);
  }
  restValue(value: number){
    this.counter = value;
    this.counterSignal.set(value);
  } 
 }
