import {Component, computed, Signal} from '@angular/core';
import { NavItem } from './models';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {ExercicesPath} from '../exercices/exercices.routes';
import {AppPath} from '../../app.routes';
import {DemosPath} from '../demos/demos.routes';
import {LoginService} from '../exercices/Guard/service/login.service';
import {Login} from '../exercices/Guard/models';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'feat-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  navItems: NavItem[] = [
    {name: 'Demos', url: AppPath.DEMOS, navItems : [
      {name: 'Binding', url: DemosPath.BINDING},
      {name: 'Directives', url: DemosPath.DIRECTIVES},
      ]},
    {name: 'Exercices', url: AppPath.EXERCICES, navItems : [
      {name: 'Binding', url: ExercicesPath.BINDING},
      {name: 'Directives', url: ExercicesPath.DIRECTIVES},
      {name: 'Pipes', url: ExercicesPath.PIPES},
      {name: 'LifeCycle', url: ExercicesPath.LIFECYCLE},
      {name: 'Input-Output', url: ExercicesPath.INPUTOUTPUT},
      {name: 'Service', url: ExercicesPath.SERVICES},
      {name: 'Form Validators', url: ExercicesPath.FORM},
      {name: 'Connection', url: ExercicesPath.LOGIN},
      {name: 'Users | Guard', url: ExercicesPath.USERS},
      ]},
  ];
  protected readonly AppPath = AppPath;
  protected readonly ExercicesPath = ExercicesPath;
  protected connectedUser : Signal<Login | undefined>;

  constructor(
    private readonly _loginService : LoginService,
  ) {
    this.connectedUser = computed(() => this._loginService.connectedUser)
  }

  logout() {
    this._loginService.logout()
  }


}
