import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyMoviesComponent } from '../home/my-movies/my-movies.component';

@Injectable()
export class MovieCategoryService {
  moviePosters;
  constructor(public http: HttpClient) { }
  defaultCategory() {
    this.http.get<any>('http://localhost:3000/category').subscribe(res => {
      this.moviePosters = res.classic;
    });
  }
  changeCategory(genre) {
    // this.MoviePoster = '';
    console.log(genre);
    this.http.get<any>('http://localhost:3000/category').subscribe(res => {
      if (genre === 'classic') {
        this.moviePosters = res.classic;
      } else if ( genre === 'hero') {
        this.moviePosters = res.hero;
      } else if ( genre === 'noir') {
        this.moviePosters = res.noir;
      }
    });
  }
}
