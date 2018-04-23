import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PreloaderService } from '../shared/preloader';
import { AuthService } from '../core/auth/services/auth.service';

import { UserInfo } from '../shared/user-info.interface';
import { Mypageuser } from './mypageuser.interface';

import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})

export class MypageComponent implements OnInit {
  userInfo: object;
  myPageUser: object;
  appUrl = environment.apiUrl;

  constructor(
    public http: HttpClient,
    private auth: AuthService,
    public preloader: PreloaderService
  ) { }

  ngOnInit() {
    this.preloader.show();
    this.auth.getToken();
    this.http.get<UserInfo>(`${this.appUrl}/members/detail`,
      { headers: { Authorization: `Token ${this.auth.getToken()}` } })
      .subscribe(user => {
        this.http.get<Mypageuser>(`${this.appUrl}/members/${user.pk}/mypage-top/`,
          { headers: { Authorization: `Token ${this.auth.getToken()}` } })
          .subscribe(res => {
            this.myPageUser = res;
            this.preloader.hide();
          });
      });
  }
}

