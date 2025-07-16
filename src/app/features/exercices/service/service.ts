import { Component } from '@angular/core';
import {ExoListView} from '../input-output/list-view/list-view';
import {CourseService} from './course-service/course';
import {FormsModule} from '@angular/forms';
import {Course} from './models';

@Component({
  selector: 'exo-service',
  imports: [
    ExoListView,
    FormsModule
  ],
  templateUrl: './service.html',
  styleUrl: './service.scss',
  providers: [CourseService]
})
export class ExoService {
  private _courseService : CourseService;
  protected item? : string;
  protected qty? : number;


  constructor(private readonly courseService : CourseService) {
    this._courseService = courseService;
  }

  getAll() : Course[] {
    return this._courseService.getAll();
  }

  deleteItem(index : number):void {
    this._courseService.deleteItem(index);
  }

  addItem():void {
    if (this.item && this.qty) {
      this._courseService.addItem(this.item, this.qty);
      this.item = undefined;
      this.qty = undefined;
      alert("Item added to the list");
      return;
    }
    alert("Champ vide");
  }

}
