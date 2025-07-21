import { Component } from '@angular/core';
import {LoginService} from '../service/login.service';
import {Login} from '../models';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'exo-login',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class ExoLogin {
  protected loginForm: FormGroup;

  constructor(private loginService: LoginService, private fb : FormBuilder) {
    this.loginForm = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, [Validators.required, Validators.min(3)]),
    })
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    if(this.loginForm.valid) {
      this.loginService.login(this.loginForm.get("email")?.value, this.loginForm.get("password")?.value);
    }
  }

  hasError(inputName : string, validator : string) : boolean | undefined {
    return this.loginForm.get(inputName)?.hasError(validator);
  }
}
