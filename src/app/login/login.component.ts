import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      userid: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}')
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  get userid() {
    return this.userForm.get('userid');
  }

  get password() {
    return this.userForm.get('password');
  }

  onSubmit() {
    console.log(this.userForm);
    // this.loginForm.reset();
  }
}
