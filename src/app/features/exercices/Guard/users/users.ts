import { Component } from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../models';
import {AppPath} from '../../../../app.routes';
import {ExercicesPath} from '../../exercices.routes';
import {Router} from '@angular/router';


@Component({
  selector: 'exo-users',
  imports: [
  ],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class ExoUsers {
  constructor(private readonly _userService: UserService, private readonly _router: Router) {

  }

  getAll(): User[] {
    return this._userService.getAll();
  }

  getById(id : number) : void {
    this._router.navigate([AppPath.EXERCICES, ExercicesPath.USER, id]).then();
  }
}
