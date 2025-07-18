import { Routes } from '@angular/router';

export enum ExercicesPath {
  HOME = 'home',
  BINDING = 'binding',
  DIRECTIVES = 'directives',
  PIPES = 'pipes',
  LIFECYCLE = 'lifecycle',
  INPUTOUTPUT = 'input-output',
  SERVICES = 'services',
  FORM = 'form',
}

export const exercicesRoutes: Routes = [
  { path: '', redirectTo: ExercicesPath.HOME, pathMatch: 'full' },
  { path: ExercicesPath.HOME, loadComponent: () => import('./home/home').then(c => c.ExoHome)},
  { path: ExercicesPath.BINDING,  loadComponent: () => import('./binding/binding').then(c => c.ExoBinding)},
  { path: ExercicesPath.DIRECTIVES, loadComponent: () => import('./directives/directives').then(c => c.ExoDirectives)},
  { path: ExercicesPath.PIPES, loadComponent: () => import('./pipes/pipes').then(c => c.ExoPipes)},
  { path: ExercicesPath.LIFECYCLE, loadComponent: () => import('./lifecycle/lifecycle').then(c => c.ExoLifecycle)},
  { path: ExercicesPath.INPUTOUTPUT, loadComponent: () => import('./input-output/input-output').then(c => c.ExoInputOutput)},
  { path: ExercicesPath.SERVICES, loadComponent: () => import('./service/service').then(c => c.ExoService)},
  { path: ExercicesPath.FORM, loadComponent: () => import('./form-validators/form-validators').then(c => c.ExoFormValidators)},
]
