import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  userInfo: UserInfo;
  myPageUser: Mypageuser;
  appUrl = environment.apiUrl;

  constructor(
    public http: HttpClient,
    private auth: AuthService,
    public preloader: PreloaderService
  ) { }

  ngOnInit() {
    const headers = new HttpHeaders()
      .set('Authorization', `Token ${this.auth.getToken()}`);
    this.preloader.show();
    this.http.get<UserInfo>(`${this.appUrl}/members/detail`,
      { headers })
      .subscribe(user => {
        this.http.get<Mypageuser>(`${this.appUrl}/members/${user.pk}/mypage-top/`,
          { headers })
          .subscribe(res => {
            this.myPageUser = res;
            this.preloader.hide();
          });
        });
      }
}

