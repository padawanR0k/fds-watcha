import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PreloaderService } from '../../preloader';
// import { MoviePoster } from '../../shared/movie-poster.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  // moviePosters: MoviePoster[];
  moviePosters: any;

  constructor(public http: HttpClient, public preloader: PreloaderService) {
  }

  rateScore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  rateFilm(target, index) {
    if (!this.moviePosters[index].rate) {
      this.moviePosters[index].rate = target.value;
    } else if (target.value === this.moviePosters[index].rate) {
      this.moviePosters[index].rate = 0;
    } else {
      this.moviePosters[index].rate = target.value;
    }
  }

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
