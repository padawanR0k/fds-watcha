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

  ngOnInit() {
    this.preloader.show();
    this.http.get<any>('http://localhost:3000/user')
      .subscribe(res => {
        setTimeout(() => {
          this.moviePosters = res.watched;
          this.preloader.hide();
        }, 2000);
      });
  }
}
