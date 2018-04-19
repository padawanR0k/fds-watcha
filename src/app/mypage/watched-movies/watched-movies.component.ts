import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../../core/auth/services/auth.service';
import { PreloaderService } from '../../shared/preloader';

import { MoviePoster } from '../../shared/movie-poster.interface';
import { UserInfo } from '../../shared/user-info.interface';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-watched-movies',
  templateUrl: './watched-movies.component.html',
  styleUrls: ['./watched-movies.component.scss']
})
export class WatchedMoviesComponent implements OnInit {

  moviePosters: object;
  userInfo: object;
  appUrl = environment.apiUrl;

  constructor(
    public http: HttpClient,
    private auth: AuthService,
    public preloader: PreloaderService
  ) { }

  ngOnInit() {
<<<<<<< HEAD
    // this.preloader.show();
    // this.auth.getToken();
    // // console.log('token', this.auth.getToken());
    // this.http.get(this.url, { headers: { Authorization: 'Token cbeecb0637c0fe6131315d84760cd5385db99bde'}})
    //   .subscribe(res => {
    //     setTimeout(() => {
    //       this.moviePosters = res.results;
    //       this.preloader.hide();
    //     }, 2000);
    //   });
=======
    this.preloader.show();
    this.auth.getToken();
    this.http.get<UserInfo>(`${this.appUrl}/members/detail`,
      { headers: { Authorization: `Token ${this.auth.getToken()}` } })
      .subscribe(user => {
        this.http.get<MoviePoster>(`${this.appUrl}/members/${user.pk}/watched-movie/`,
          { headers: { Authorization: `Token ${this.auth.getToken()}` } })
          .subscribe(res => {
              this.moviePosters = res.results;
              this.preloader.hide();
          });
      });
>>>>>>> 91c6b67232faaf31b9a24927e410a4342e914943
  }
}
