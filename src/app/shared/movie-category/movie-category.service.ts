import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyMoviesComponent } from '../../home/my-movies/my-movies.component';

import { AuthService } from '../../core/auth/services/auth.service';
import { environment } from '../../../environments/environment';

import { MovieList } from './movie-category.interface';

@Injectable()
export class MovieCategoryService {
  appUrl = environment.apiUrl;
  httpHeader = {'headers': { 'Authorization' : `token ${this.authSevice.getToken()}`} };
  sort = 'genre';
  moviePosters: MovieList[];
  constructor(public http: HttpClient, public authSevice: AuthService) {}
  defaultCategory() {
    this.http.get<MovieList[]>(`${this.appUrl}/movie/genre/top-korea/`, this.httpHeader)
      .subscribe(res => {
        this.moviePosters = res.results;
      });
  }
  changeCategory(category) {
    this.sort = ['top-korea', 'million-seller', 'hero', 'sports', 'family', 'top-world'].indexOf(category) === -1 ? 'genre' : 'tag';
    this.http.get<MovieList[]>(`${this.appUrl}/movie/${this.sort}/${category}/`, this.httpHeader)
      .subscribe(res => {
        this.moviePosters = res.results;
      });
  }
}
