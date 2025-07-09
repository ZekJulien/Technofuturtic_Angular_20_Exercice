import { Component } from '@angular/core';
import {Produit} from './models';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'exo-directives',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './directives.html',
  styleUrl: './directives.scss'
})
export class ExoDirectives {
// - Si un produit est en promo, on affiche son prix normal barré et son prix promo en rouge.
// - Si un produit n'est plus disponible (qtt 0), afficher qu'il ne l'est plus.
  produits : Produit[] = [
    {nom : 'JPhone525', photo : 'phone527.jpg', prix : 525.25, prixPromo : 500.25, enPromo : false, qttRestante: 7},
    {nom : 'JPhone526', photo : 'phone526.jpg', prix : 526.26, prixPromo : 500.26, enPromo : true, qttRestante: 7},
    {nom : 'JPhone527', photo : 'phone527.jpg', prix : 527.27, prixPromo : 500.27, enPromo : false, qttRestante: 0}
  ]


}
