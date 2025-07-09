import { Component } from '@angular/core';
import {DemoBinding} from '../features/demos/binding/binding';
import {ExoBinding} from '../features/exercices/binding/binding';

@Component({
  selector: 'app-root',
  imports: [
    DemoBinding,
    ExoBinding
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'tf-exo';

}
