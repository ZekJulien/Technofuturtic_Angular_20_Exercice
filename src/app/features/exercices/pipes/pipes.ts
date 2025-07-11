import { Component } from '@angular/core';
import {ChronoPipe} from './pipes/chrono-pipe';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'exo-pipes',
  imports: [
    ChronoPipe,
    DatePipe
  ],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss'
})
export class ExoPipes {
  protected date : Date = new Date(0,0,0,0,0,0,0);
  protected temps = 0;
  private interval?: number;

  start() : void {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.date = new Date(0,0,0,0, 0,this.temps++, 0);
      }, 1000);
    }
  }

  stop() : void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  reset() : void {
    this.stop();
    this.temps = 0;
    this.date = new Date(0,0,0,0,0,0,0);
  }

}
