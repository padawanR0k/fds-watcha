import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { AuthService } from '../core/auth/services/auth.service';

@Injectable()
export class BoxOfficePagenationService {
  appUrl = environment.apiUrl;
  nextUrl: string;
  todayBoxOffice;
  constructor(public http: HttpClient, public authSevice: AuthService) { }
  next(): void {
    this.http.get(this.nextUrl, {'headers': { 'Authorization' : `token ${this.authSevice.getToken()}`} })
    .subscribe(res => {
      this.nextUrl = res.next;
      this.todayBoxOffice = [...this.todayBoxOffice, ...res.results]
    });
  }

  loadTopFive(): void {
    this.http.get(`${this.appUrl}/movie/box-office/five-list/`, {'headers': { 'Authorization' : `token ${this.authSevice.getToken()}`} })
    .subscribe(res => {
      this.todayBoxOffice = res.results;
      this.nextUrl = res.next;
    });
  }
}
