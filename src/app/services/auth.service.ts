import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JwtHelper } from 'angular2-jwt';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';

import { environment } from '../../environments/environment';

import { User } from '../models/user';
import { Token } from '../models/token';

@Injectable()
export class AuthService {
  appUrl = environment.apiUrl;
  TOKEN_NAME = environment.tokenName;
  user = environment.user;

  constructor(private http: HttpClient, private jwtHelper: JwtHelper) {
    console.log('[appUrl] ', this.appUrl);
  }

  signin(credential: User): Observable<Token> {
    console.log('My', credential);
    return this.http.post<Token>(`${this.appUrl}/members/email-auth-token/`, credential)
      .do(res => this.setToken(res.token))
      .do(res => this.setUser(res.user))
      .shareReplay();
  }

  signout(): void {
    this.removeToken();
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? !this.isTokenExpired(token) : false;
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_NAME, token);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_NAME);
    localStorage.removeItem(this.user);
  }
  
  setUser(user) {
    localStorage.setItem(this.user, user);
  }
  /*
    token 유효 기간 체크
    The JwtHelper class has several useful methods that can be utilized in your components:

    decodeToken
    getTokenExpirationDate
    isTokenExpired

    npm install angular2-jwt
    https://github.com/auth0/angular2-jwt
  */
  isTokenExpired(token: string) {
    return this.jwtHelper.isTokenExpired(token);
  }

  getUserid(): string {
    return this.jwtHelper.decodeToken(this.getToken()).userid;
  }
}
