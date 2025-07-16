import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import {formatDate} from '@angular/common';

export function DateDelayValidator(days: number = 7): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const inputDate = new Date(control.value);
    const today = new Date();

    inputDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const minDate = new Date(today);
    minDate.setDate(today.getDate() + days);

    const isInvalid = inputDate < minDate;
    const formattedDate = formatDate(minDate, 'dd/MM/yyyy', 'en')

    return isInvalid ? { DateDelay: { requiredDate: formattedDate } } : null;
  };
}
