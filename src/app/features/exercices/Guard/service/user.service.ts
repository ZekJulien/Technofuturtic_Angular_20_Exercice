import {Injectable, signal} from '@angular/core';
import {User} from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userData : User[] = [
    {
      id: 1,
      email: 'aurelie.bouton@techhub.io',
      city: 'Lille',
      firstName: 'Aurélie',
      lastName: 'Bouton',
      street: '12 rue des Lilas'
    },
    {
      id: 2,
      email: 'hugo.martens@devmail.org',
      city: 'Namur',
      firstName: 'Hugo',
      lastName: 'Martens',
      street: '78 avenue du Printemps'
    },
    {
      id: 3,
      email: 'ines.david@webverse.net',
      city: 'Strasbourg',
      firstName: 'Inès',
      lastName: 'David',
      street: '34 place Gutenberg'
    },
    {
      id: 4,
      email: 'louis.grange@nodeify.fr',
      city: 'Charleroi',
      firstName: 'Louis',
      lastName: 'Grange',
      street: '5 impasse du Code'
    },
    {
      id: 5,
      email: 'emma.leclerc@frontend.be',
      city: 'Liège',
      firstName: 'Emma',
      lastName: 'Leclerc',
      street: '15 quai des Pixels'
    }
  ]

  addUser(user : User) : void {
    this._userData.push(user);
  }

  getById(id: number) : User | undefined {
    return this._userData.find((e) => e.id === id);
  }

  getAll(): User[] {
    return this._userData;
  }
}
