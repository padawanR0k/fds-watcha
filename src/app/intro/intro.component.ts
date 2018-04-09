import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/services/auth.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  message: string;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  socialSignin(provider: string) {
    this.auth.socialSignin(provider)
      .subscribe(
        () => this.router.navigate(['']),
        ({ error }) => this.message = error.message
    );
    // console.log('[payload]', this.userForm.value);
    // this.auth.signin(this.userForm.value)
    //   .subscribe(
    //     () => {
    //       console.log('LOGIN1');
    //       this.router.navigate(['']);
    //       console.log(this.router);
    //     },
    //     ({ error }) => {
    //       console.log('ERROR', error.message);
    //       this.message = error.message;
    //     }
    //   );
  }

  gotoLogin() {
    this.router.navigate(['login']);
  }

  gotoJoin() {
    this.router.navigate(['join']);
  }
}
