import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../../core/auth/services/auth.service';
import { PreloaderService } from '../../shared/preloader';
// import { MoviePoster } from '../../shared/movie-poster.interface';

@Component({
  selector: 'app-watched-movies',
  templateUrl: './watched-movies.component.html',
  styleUrls: ['./watched-movies.component.scss']
})
export class WatchedMoviesComponent implements OnInit {
  moviePosters: any;

  url = 'https://justdo2t.com/api/members/6/watched-movie/';

  constructor(
    public http: HttpClient,
    private auth: AuthService,
    public preloader: PreloaderService
  ) { }

  ngOnInit() {
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
  }
}
