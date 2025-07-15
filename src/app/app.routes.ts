import { Routes } from '@angular/router';
import {ExoBinding} from './features/exercices/binding/binding';
import {Exercices} from './features/exercices/exercices';
import {ExoDirectives} from './features/exercices/directives/directives';
import {Demos} from './features/demos/demos';
import {DemoBinding} from './features/demos/binding/binding';
import {DemoDirective} from './features/demos/directives/demo-directive/demo-directive';
import {ExoPipes} from './features/exercices/pipes/pipes';
import {ExoLifecycle} from './features/exercices/lifecycle/lifecycle';
import {ExoInputOutput} from './features/exercices/input-output/input-output';

export const routes: Routes = [
  { path: 'exercices', component : Exercices, children: [
      { path: '', redirectTo: 'binding', pathMatch: 'full' },
      { path: 'binding', component : ExoBinding },
      { path: 'directives', component : ExoDirectives},
      { path: 'pipes', component : ExoPipes},
      { path: 'lifecycle', component : ExoLifecycle},
      { path: 'input-output', component : ExoInputOutput},
    ]},
  { path: 'demos', component : Demos, children: [
      { path: '', redirectTo: 'binding', pathMatch: 'full' },
      { path: 'binding', component : DemoBinding },
      { path: 'directives', component : DemoDirective}
    ]},
  { path: '**', redirectTo: 'exercices', pathMatch: 'full' },
];
