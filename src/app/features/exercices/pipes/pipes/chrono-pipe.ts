import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chrono'
})
export class ChronoPipe implements PipeTransform {
  // Au final pas de pipe pour transformer en date.
  transform(value: number): Date {
    return new Date(0,0,0,0,0,value);
  }

}
