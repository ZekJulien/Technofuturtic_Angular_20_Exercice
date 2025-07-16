import { Injectable } from '@angular/core';
import {Appointment} from '../models';

export class AppointementService {

  private appointementList : Appointment[] = []

  addAppointment(appointment : Appointment) {
    this.appointementList.push(appointment);
  }

  getAll():Appointment[] {
    return this.appointementList;
  }

}
