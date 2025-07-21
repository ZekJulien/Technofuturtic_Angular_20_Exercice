import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {LoginService} from '../service/login.service';
import {Login} from '../models';
import {AppPath} from '../../../../app.routes';
import {ExercicesPath} from '../../exercices.routes';

export const connectedGuard: CanActivateFn = (route, state) => {
  const userService = inject(LoginService);
  const router = inject(Router);
  const connectedUser : Login | undefined = userService.connectedUser;
  if(connectedUser) {
    return true;
  }
  alert("Vous devez être connectée avant d'accéder à cette page.")
  router.navigate([AppPath.EXERCICES, ExercicesPath.LOGIN]).then()
  return false;
};
