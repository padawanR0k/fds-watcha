import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../core/auth/services/auth.service';
import { PreloaderService } from '../shared/preloader';

import { MoviePoster } from '../shared/movie-poster.interface';

import { environment } from '../../environments/environment';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  moviePosters: object;
  count: number;
  searchString = '인셉션';
  appUrl = environment.apiUrl;

  constructor(
    public http: HttpClient,
    private auth: AuthService,
    public preloader: PreloaderService
  ) { }

  ngOnInit() {
    this.preloader.show();
    this.auth.getToken();
    this.http.get<MoviePoster>(`${this.appUrl}/movie/search/?movie=바`,
      { headers: { Authorization: `Token ${this.auth.getToken()}` } })
      .subscribe(res => {
        setTimeout(() => {
          this.moviePosters = res.results;
          this.count = res.count;
          this.preloader.hide();
        }, 2000);
      });
  }


}
