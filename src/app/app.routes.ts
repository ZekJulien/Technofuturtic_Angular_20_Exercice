import { Routes } from '@angular/router';
import {ExoBinding} from './features/exercices/binding/binding';

export const routes: Routes = [
  { path: '', component : ExoBinding },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
