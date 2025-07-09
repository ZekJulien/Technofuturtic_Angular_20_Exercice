import { Component } from '@angular/core';
// import {DemoBinding} from '../features/demos/binding/binding';
import {ExoBinding} from '../features/exercices/binding/binding';
import {RouterOutlet} from '@angular/router';
import {Navbar} from '../features/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // DemoBinding,
    ExoBinding,
    Navbar
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
