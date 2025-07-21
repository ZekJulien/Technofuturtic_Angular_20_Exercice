import { Component, OnInit } from '@angular/core';
import {User} from '../models';
import {UserService} from '../service/user.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {ExercicesPath} from '../../exercices.routes';
import {AppPath} from '../../../../app.routes';

@Component({
  selector: 'exo-user',
  imports: [
    RouterLink
  ],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class ExoUser implements OnInit {
  protected user : User | undefined;
  protected id : number | undefined;
  protected maxId : number = 0;
  protected readonly ExercicesPath = ExercicesPath;
  protected readonly AppPath = AppPath;

  constructor(private readonly _userService : UserService, private readonly _activeRoute : ActivatedRoute, private readonly _router : Router) {

  }

  ngOnInit() {
    this._activeRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      if (!isNaN(this.id)) {
        this.user = this._userService.getById(this.id);
        if (this.user) {
          return
        }
      }
      this._router.navigate([AppPath.EXERCICES, ExercicesPath.USERS]);
    });

    this.maxId = this._userService.getAll().length ?? 0;
  }

  next() : void{
    if(this.id){
      this.id++
      if(this.id > this.maxId){
        this.id = 1
      }
    }
    this._router.navigate([AppPath.EXERCICES, ExercicesPath.USER, this.id]).then();
  }
  previous() : void{
    if(this.id){
      this.id--
      if(this.id === 0){
        this.id = this.maxId
      }
    }
    this._router.navigate([AppPath.EXERCICES, ExercicesPath.USER, this.id]).then();
  }

  back() : void{
    this._router.navigate([AppPath.EXERCICES, ExercicesPath.USERS]).then();
  }


}
