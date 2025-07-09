import { Component } from '@angular/core';
import { Utilisateur } from './models';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'exo-binding',
  imports: [
    FormsModule
  ],
  templateUrl: './binding.html',
  styleUrl: './binding.scss'
})
export class ExoBinding {
  utilisateurs : Utilisateur[] = [
    {mail : 'mail@mail.mail', mdp : 'mail', description : 'mail mailmailmail mail mail mailmail.', nbTrombone : 0, profilImageUrl : 'favicon.ico'},
    {mail : 'mail@mail.mail', mdp : 'mail', description : 'mail mailmailmail mail mail mailmail.', nbTrombone : 0, profilImageUrl : 'favicon.ico'},
  ];

  nbTrombone(bool : boolean, utilisateur : Utilisateur) : void {
    if (bool) {
      utilisateur.nbTrombone++
      return;
    }
    if (utilisateur.nbTrombone > 0){
      utilisateur.nbTrombone--;
      return;
    }
  }
}
