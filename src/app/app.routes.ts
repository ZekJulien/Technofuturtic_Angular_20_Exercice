import { Routes } from '@angular/router';
import {ExoBinding} from './features/exercices/binding/binding';
import {Exercices} from './features/exercices/exercices';
import {DemoDirective} from './features/demos/directives/demo-directive/demo-directive';

export const routes: Routes = [
  { path: 'binding', component : ExoBinding },
  { path: 'exercices', component : Exercices},
  { path: 'directives', component : DemoDirective},
  { path: '**', redirectTo: 'binding', pathMatch: 'full' },
];
