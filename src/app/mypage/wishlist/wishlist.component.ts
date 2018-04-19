import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../../core/auth/services/auth.service';
import { PreloaderService } from '../../shared/preloader';
// import { MoviePoster } from '../../shared/movie-poster.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  // moviePosters: MoviePoster[];
  moviePosters: any;

  url = 'https://justdo2t.com/api/members/6/want-movie/';
  constructor(
    public http: HttpClient,
    private auth: AuthService,
    public preloader: PreloaderService
  ) { }

  ngOnInit() {
    // this.preloader.show();
    // this.auth.getToken();
    // // console.log('token', this.auth.getToken());
    // this.http.get(this.url, { headers: { Authorization: 'Token 55a180ba9147e6e09f6c01227c3ee13a3d3d8c97' } })
    //   .subscribe(res => {
    //     this.moviePosters = res.results;
    //     this.preloader.hide();
    //   });
  }
}
