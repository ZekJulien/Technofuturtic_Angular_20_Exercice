import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'exo-list-view',
  imports: [],
  templateUrl: './list-view.html',
  styleUrl: './list-view.scss'
})
export class ExoListView {

  @Input() itemList: string[] = [];
  @Output() itemChange = new EventEmitter();

  deleteItem(item : string) {
    this.itemChange.emit(item);
  }
}
