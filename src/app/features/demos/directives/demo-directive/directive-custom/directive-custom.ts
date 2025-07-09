import { Component } from '@angular/core';
import {HighlightDirective} from './directives/highlight.directive';

@Component({
  selector: 'demo-directive-custom',
  imports: [ HighlightDirective ],
  templateUrl: './directive-custom.html',
  styleUrl: './directive-custom.scss'
})
export class DirectiveCustom {

}
