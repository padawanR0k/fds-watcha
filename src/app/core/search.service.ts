import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from './auth/services/auth.service';

import { MoviePoster } from '../shared/movie-poster.interface';

import { environment } from '../../environments/environment';

@Injectable()
export class SearchService {

  moviePosters: object;
  data: object;
  searchString: string;
  appUrl = environment.apiUrl;

  constructor(
    public http: HttpClient,
    private auth: AuthService
  ) { }

  searchMovie() {
    this.auth.getToken();
    this.http.get<MoviePoster>(`${this.appUrl}/movie/search/?movie=${this.searchString}`,
    { headers: { Authorization: `Token ${this.auth.getToken()}` } })
    .subscribe(res => {
      this.moviePosters = res.results;
      this.data = res;
    });
  }
}
