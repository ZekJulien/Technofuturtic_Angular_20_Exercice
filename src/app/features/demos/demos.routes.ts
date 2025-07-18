import { Routes } from '@angular/router';
import {DemoDirective} from './directives/demo-directive/demo-directive';

export enum DemosPath {
  BINDING = 'binding',
  DIRECTIVES = 'directives',
}

export const demosRoutes: Routes = [
  { path: '', redirectTo: 'binding', pathMatch: 'full' },
  { path: DemosPath.BINDING,  loadComponent: () => import('./binding/binding').then(c => c.DemoBinding)},
  { path: DemosPath.DIRECTIVES, loadComponent: () => import('./directives/demo-directive/demo-directive').then(c => c.DemoDirective)},
]
