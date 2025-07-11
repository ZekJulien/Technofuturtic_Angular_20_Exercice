import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'exo-lifecycle',
    imports: [
        DatePipe
    ],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.scss'
})
export class ExoLifecycle implements OnInit, OnDestroy{
  protected date : Date = new Date(0,0,0,0,0,0,0);
  protected temps = 0;
  private interval?: number;

  ngOnInit() {
    console.log("Lifecycle initialized");
    this.start()
  }
  ngOnDestroy() {
    this.reset();
    console.log("Lifecycle destroyed");
  }

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
