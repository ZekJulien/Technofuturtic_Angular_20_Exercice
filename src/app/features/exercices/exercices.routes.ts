import {mapToCanActivate, Routes} from '@angular/router';
import {connectedGuard} from './Guard/guard/connected.guard-guard';

export enum ExercicesPath {
  ID = '/:id',
  HOME = 'home',
  BINDING = 'binding',
  DIRECTIVES = 'directives',
  PIPES = 'pipes',
  LIFECYCLE = 'lifecycle',
  INPUTOUTPUT = 'input-output',
  SERVICES = 'services',
  FORM = 'form',
  LOGIN = 'login',
  USER = 'user',
  USERS =  'users',
}

export const exercicesRoutes: Routes = [
  { path: '', redirectTo: ExercicesPath.HOME, pathMatch: 'full' },
  { path: ExercicesPath.HOME,
    loadComponent: () => import('./home/home').then(c => c.ExoHome)},
  { path: ExercicesPath.BINDING,
    loadComponent: () => import('./binding/binding').then(c => c.ExoBinding)},
  { path: ExercicesPath.DIRECTIVES,
    loadComponent: () => import('./directives/directives').then(c => c.ExoDirectives)},
  { path: ExercicesPath.PIPES,
    loadComponent: () => import('./pipes/pipes').then(c => c.ExoPipes)},
  { path: ExercicesPath.LIFECYCLE,
    loadComponent: () => import('./lifecycle/lifecycle').then(c => c.ExoLifecycle)},
  { path: ExercicesPath.INPUTOUTPUT,
    loadComponent: () => import('./input-output/input-output').then(c => c.ExoInputOutput)},
  { path: ExercicesPath.SERVICES,
    loadComponent: () => import('./service/service').then(c => c.ExoService)},
  { path: ExercicesPath.FORM,
    loadComponent: () => import('./form-validators/form-validators').then(c => c.ExoFormValidators)},
  { path: ExercicesPath.LOGIN,
    loadComponent: () => import('./Guard/login/login').then(c => c.ExoLogin)},
  { path: ExercicesPath.USER + ExercicesPath.ID,
    loadComponent: () => import('./Guard/user/user').then(c => c.ExoUser),
    canActivate: [connectedGuard],
  },
  { path: ExercicesPath.USERS,
    loadComponent: () => import('./Guard/users/users').then(c => c.ExoUsers),
    canActivate: [connectedGuard]
  },

]
