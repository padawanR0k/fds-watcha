import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  message: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}')
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  get username() {
    return this.userForm.get('username');
  }

  get password() {
    return this.userForm.get('password');
  }

  signin() {
    console.log('[payload]', this.userForm.value);
    this.auth.signin(this.userForm.value)
      .subscribe(
        () => this.router.navigate(['home']),
        ({ error }) => {
          console.log(error.message);
          this.message = error.message;
        }
      );
  }

  gotoJoin() {
    this.router.navigate(['join']);
  }
}
