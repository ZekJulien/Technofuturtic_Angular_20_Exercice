import { Routes } from '@angular/router';
import {ExoBinding} from './features/exercices/binding/binding';
import {Exercices} from './features/exercices/exercices';
import {ExoDirectives} from './features/exercices/directives/directives';

export const routes: Routes = [
  { path: 'binding', component : ExoBinding },
  { path: 'exercices', component : Exercices},
  { path: 'directives', component : ExoDirectives},
  { path: '**', redirectTo: 'binding', pathMatch: 'full' },
];
