import {User} from './user.interface';
import {Address} from './address';

export interface Appointment{
  user : User,
  address? : Address,
  atHome : boolean,
  description : string,
  dates : Date[],
}
