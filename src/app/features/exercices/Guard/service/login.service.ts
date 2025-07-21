import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {Login, User} from '../models';
import {UserService} from './user.service';
import {Router} from '@angular/router';
import {ExercicesPath} from '../../exercices.routes';
import {AppPath} from '../../../../app.routes';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginData : Login[] = [
    { email: 'aurelie.bouton@techhub.io', password: 'a' },
    { email: 'hugo.martens@devmail.org', password: 'h' },
    { email: 'ines.david@webverse.net', password: 'i' },
    { email: 'louis.grange@nodeify.fr', password: 'l' },
    { email: 'emma.leclerc@frontend.be', password: 'e' }
  ]

  private _connectedUser : WritableSignal<Login | undefined> = signal<Login | undefined>(undefined);

  constructor(private readonly _userService : UserService, private readonly _router: Router) {
  }

  addLogin(login : Login) : void {
    this.loginData.push(login);
    this._userService.addUser({
      id: this._userService.getAll().length,
      email : login.email,
      city : '',
      street: '',
      lastName: '',
      firstName: ''
    })
  }

  getByEmail(email : string) : Login | undefined {
    return this.loginData.find((e) => e.email === email);
  }

  login(email: string, password: string) : Login | undefined {
    const login: Login | undefined = this.getByEmail(email);
    if (login) {
      if (login.email === email && login.password === password) {
        this._connectedUser.set(login)
        this._router.navigate([AppPath.EXERCICES, ExercicesPath.USERS]);
      }
    }
    return undefined
  }

  logout() : void {
    this._connectedUser.set(undefined);
  }

  get connectedUser(): Login | undefined {
    return this._connectedUser();
  }

}
