import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Appointment} from './models';
import {AppointementService} from './services/appointement';
import {DateDelayValidator} from './validators/date-delay.validator';
@Component({
  selector: 'exo-form-validators',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form-validators.html',
  styleUrl: './form-validators.scss',
  providers: [AppointementService]
})
export class ExoFormValidators {
  protected readonly title : string = 'Form Validators';
  protected formGroup : FormGroup;
  protected formDates : FormArray;

  constructor(private readonly formBuilder: FormBuilder, private readonly appService : AppointementService) {
    this.formGroup = this.formBuilder.group({
      firstName : this.formBuilder.control('', [Validators.required]),
      lastName : this.formBuilder.control('', [Validators.required]),
      email : this.formBuilder.control('', [Validators.required, Validators.email]),
      description : this.formBuilder.control('', [Validators.required]),
      atHome : this.formBuilder.control(false),
      street : this.formBuilder.control(''),
      city : this.formBuilder.control(''),
      zip : this.formBuilder.control(''),
      dates : this.formBuilder.array([])
    })
    this.formDates = this.formGroup.get('dates') as FormArray;
    this.addAppointement()
  }

  isAtHome():void{
    const street = this.formGroup.get('street');
    const city = this.formGroup.get('city');
    const zip = this.formGroup.get('zip');
    if(this.formGroup.get('atHome')?.value === true){
      street?.setValidators(Validators.required);
      city?.setValidators(Validators.required);
      zip?.setValidators(Validators.required);
    }
    else{
      street?.clearValidators();
      city?.clearValidators();
      zip?.clearValidators();
    }
    street?.updateValueAndValidity();
    city?.updateValueAndValidity();
    zip?.updateValueAndValidity();
  }

  hasError(inputName : string, validator : string) : boolean | undefined {
    return this.formGroup.get(inputName)?.hasError(validator);
  }

  addAppointement(): void{
    this.formDates.push(this.formBuilder.control('', [Validators.required, DateDelayValidator()]));
  }

  deleteAppointement(index: number): void {
    this.formDates.removeAt(index);
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    const formValue = this.formGroup.value;
    let Appointment: Appointment = {
      user : {
        email : formValue.email,
        lastName : formValue.lastName,
        firstName : formValue.firstName
      },
      atHome : formValue.atHome,
      dates : formValue.dates,
      description : formValue.description,
      address : {
        street : formValue.street,
        zip : formValue.zip,
        city : formValue.city,
      }
    }
    this.appService.addAppointment(Appointment)
    this.formGroup.reset()
    console.log(this.appService.getAll())
  }


}
