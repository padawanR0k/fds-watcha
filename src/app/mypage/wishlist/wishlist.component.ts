import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  url = 'http://';
  constructor(public http: HttpClient, public preloader: PreloaderService) { }

  ngOnInit() {
    this.preloader.show();
    this.http.get('http://localhost:3000/movieposter')
      .subscribe(res => {
        setTimeout(() => {
          this.moviePosters = res;
          this.preloader.hide();
        }, 2000);
      });
  }
}
