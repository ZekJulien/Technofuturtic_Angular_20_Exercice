import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'exo-input-list',
  imports: [
    FormsModule
  ],
  templateUrl: './input-list.html',
  styleUrl: './input-list.scss'
})
export class ExoInputList {
  protected inputItem? : string;
  @Output() sendInput = new EventEmitter();

  protected buttonAction(){
    if(this.inputItem){
      this.sendInput.emit(this.inputItem);
    }
    else {
      alert("Champ vide")
    }
    this.inputItem = undefined;
  }
}
