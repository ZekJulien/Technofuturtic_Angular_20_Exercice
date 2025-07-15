import { Component } from '@angular/core';
import {ExoInputList} from './input-list/input-list';
import {ExoListView} from './list-view/list-view';

@Component({
  selector: 'exo-input-output',
  imports: [
    ExoInputList,
    ExoListView
  ],
  templateUrl: './input-output.html',
  styleUrl: './input-output.scss'
})
export class ExoInputOutput {
  protected itemList: string[] = [];

  protected deleteItem(item : string) {
    this.itemList = this.itemList.filter(list => list !== item);
  }

  protected addItem(item: string) {
    this.itemList.push(item)
  }
}
