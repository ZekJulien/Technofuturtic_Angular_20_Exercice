import { Component } from '@angular/core';
import { NavItem } from './models';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'feat-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  navItems: NavItem[] = [
    {name: 'Demos', url: 'demos', navItems : [
      {name: 'Binding', url: 'binding'},
      {name: 'Directives', url: 'directives'},
      ]},
    {name: 'Exercices', url: 'exercices', navItems : [
      {name: 'Binding', url: 'binding'},
      {name: 'Directives', url: 'directives'},
      ]},
  ];
}
