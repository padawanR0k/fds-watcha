import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PreloaderService } from '../shared/preloader';
import { AuthService } from '../core/auth/services/auth.service';
import { UserService } from '../core/auth/services/user.service';

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
  pk: number;
  appUrl = environment.apiUrl;

  constructor(
    public http: HttpClient,
    private auth: AuthService,
    private user: UserService,
    public preloader: PreloaderService
  ) { }

  mypageHead(): Observable<Mypageuser> {
    const token = this.auth.getToken();
    const headers = new HttpHeaders()
      .set('Authorization', `Token ${token}`);
    return this.http.get<Mypageuser>(`${this.appUrl}/members/${this.pk}/mypage-top/`, { headers })
      .shareReplay();
  }

  ngOnInit() {
    this.preloader.show();
    this.user.getUsers()
      .subscribe(user => {
        this.pk = user.pk;
        this.mypageHead()
        .subscribe(res => {
          this.myPageUser = res;
          this.preloader.hide();
        });
      })
  }
}

