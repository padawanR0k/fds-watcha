import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PreloaderService } from '../../shared/preloader';
// import { MoviePoster } from '../../shared/movie-poster.interface';

@Component({
  selector: 'app-watched-movies',
  templateUrl: './watched-movies.component.html',
  styleUrls: ['./watched-movies.component.scss']
})
export class WatchedMoviesComponent implements OnInit {
  moviePosters: any;

  url = 'http://localhost:3000/movieposter';
  constructor(public http: HttpClient, public preloader: PreloaderService) { }

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
