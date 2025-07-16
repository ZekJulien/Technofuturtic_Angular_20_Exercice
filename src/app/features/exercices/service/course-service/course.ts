import {Course} from '../models';

export class CourseService {
  itemList: Course[] = [];

  getAll() : Course[] {
    return this.itemList;
  }

  deleteItem(index : number):void {
    this.itemList.splice(index, 1);
  }

  addItem(item: string, qty : number):void {
    this.itemList.push({name : item, qty: qty});
  }
}
