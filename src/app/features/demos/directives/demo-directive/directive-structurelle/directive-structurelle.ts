import { Component } from '@angular/core';

interface User {
  name: string;
  isConnected: boolean;
  listePlatPref: string[];
  platPrefChoisi: number;
}


@Component({
  selector: 'demo-directive-structurelle',
  imports: [],
  templateUrl: './directive-structurelle.html',
  styleUrl: './directive-structurelle.scss'
})
export class DirectiveStructurelle {
  users: User[] = [
    {
    name: 'Mauritcio',
    isConnected: false,
    listePlatPref: ['Spaghetti', 'Boulette', 'Frite'],
    platPrefChoisi: 0
    },
    {
      name: 'Alex',
      isConnected: false,
      listePlatPref: ['Spaghetti', 'Boulette', 'Frite'],
      platPrefChoisi: 2
    },
    {
      name: 'Sabrina',
      isConnected: false,
      listePlatPref: ['Spaghetti', 'Boulette', 'Frite'],
      platPrefChoisi: 1
    },
    {
      name: 'Nadia',
      isConnected: false,
      listePlatPref: ['Spaghetti', 'Boulette', 'Frite'],
      platPrefChoisi: 3
    },

  ]

  toggleUserConnectionStatus(id: number) {
    this.users[id].isConnected = !this.users[id].isConnected;
  }
}
