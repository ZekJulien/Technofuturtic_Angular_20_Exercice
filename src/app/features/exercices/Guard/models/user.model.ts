import {Login} from './login.model';

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
}
