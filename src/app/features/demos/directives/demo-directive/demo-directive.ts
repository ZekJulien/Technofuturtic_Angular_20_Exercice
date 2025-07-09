import {Component} from '@angular/core';
import {DirectiveCustom} from './directive-custom/directive-custom';

@Component({
  selector: 'demo-directive',
  imports: [
    DirectiveCustom
  ],
  templateUrl: './demo-directive.html',
  styleUrl: './demo-directive.scss'
})
export class DemoDirective {

}
