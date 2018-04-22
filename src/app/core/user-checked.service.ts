import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { UserService } from './auth/services/user.service';
import { AuthService } from './auth/services/auth.service';
import { environment } from '../../environments/environment';


export interface UserWatched {
  count: number;
  next?: null;
  previous?: null;
  results: [
    {
      id: number;
      title_ko: string;
      title_en: string;
      rating_avg: string;
      nation: string;
      poster_image_m: string;
      poster_image_my_x3: string;
      genre: [
        {
          id: number;
          genre: string;
        }
      ];
      running_time: number;
      login_user_checked: {
        id: number;
        user_want_movie: boolean;
        user_watched_movie: boolean;
        rating: string;
        comment: string;
        user: number;
        movie: number;
      };
    }
  ];
}

@Injectable()
export class UserCheckedService {
  appUrl = environment.apiUrl;
  userWatched;
  userWatchedCnt: number;

  constructor(private user: UserService, public http: HttpClient, private authService: AuthService) {
    const headers  = new HttpHeaders()
      .set('Authorization', `token ${this.authService.getToken()}`);
    this.user.getUsers().subscribe( userInfo => {
      this.http.get<UserWatched>(`${this.appUrl}/members/${userInfo.pk}/watched-movie/`, { headers } )
        .subscribe( res => {
          this.setWatchedList(res.results);
          console.log('유저 가 본 리스트 get', res.results);
        });
      });
  }
  setWatchedList(Watched) {
    this.userWatched = Watched;
  }
}
