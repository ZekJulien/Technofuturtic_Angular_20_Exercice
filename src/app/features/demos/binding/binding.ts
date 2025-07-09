import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'demo-binding',
  imports: [
    FormsModule
  ],
  templateUrl: './binding.html',
  styleUrl: './binding.scss'
})
export class DemoBinding {
  prenom: string = "mauritcio";
  logoSrc: string = "favicon.ico";
  logoAlt: string = "ma description super précise si mon image n'est pas chargée.";

  compteurDeClic: number = 0;

  protected augmenter() {
    this.compteurDeClic++;
  }
}
