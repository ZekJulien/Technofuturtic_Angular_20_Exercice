import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'exo-list-view',
  imports: [],
  templateUrl: './list-view.html',
  styleUrl: './list-view.scss'
})
export class ExoListView {

  @Input() itemList: unknown[] = [];
  @Output() itemChange = new EventEmitter();

  deleteItem(index : number) {
    this.itemChange.emit(index);
  }

  protected objectToPairs(obj: unknown): { key: string; value: unknown }[] {
    return Object.entries(obj as Record<string, unknown>)
      .map(([key, value]) => {
        return { key, value };
      });
  }

  isStringArray(array: unknown[]) {
    return typeof array[0] === 'string'
  }
}
