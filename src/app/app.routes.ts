import { Routes } from '@angular/router';

export enum AppPath {
  EXERCICES = 'exercices',
  DEMOS = 'demos',
}

export const routes: Routes = [
  {
    path: AppPath.EXERCICES,
    loadComponent: () => import('./features/exercices/exercices').then(c => c.Exercices),
    loadChildren : () => import('./features/exercices/exercices.routes').then(r => r.exercicesRoutes)
  },
  {
    path: AppPath.DEMOS,
    loadComponent: () => import('./features/demos/demos').then(c => c.Demos),
    loadChildren : () => import('./features/exercices/exercices.routes').then(r => r.exercicesRoutes)
  },
  { path: '**', redirectTo: AppPath.EXERCICES, pathMatch: 'full' },
];
