import { Component } from '@angular/core';
// import {DemoBinding} from '../features/demos/binding/binding';
import {ExoBinding} from '../features/exercices/binding/binding';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // DemoBinding,
    ExoBinding
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
