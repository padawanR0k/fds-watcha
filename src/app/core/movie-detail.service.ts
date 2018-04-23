import { Injectable, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { AuthService } from './auth/services/auth.service';

import { MovieDetail } from '../shared/movie-detail.interface';

@Injectable()
export class MovieDetailService {
  appUrl = environment.apiUrl;
  renderer: Renderer2;
  el: ElementRef;
  modal = false;
  message: string;
  movie: MovieDetail;
  commetRating: number;
  type: string;
  starRate: number[] = [];
  starMin = .5;
  starMax = 5;
  starIncrease = .5;

  boxOfficeMovie;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    for (let i = this.starMin; i <= this.starMax; i += this.starIncrease) {
      this.starRate = this.starRate.concat(i);
    }
  }

  movieDetail(id: number) {
    const token = this.auth.getToken();
    const headers = new HttpHeaders()
      .set('Authorization', `Token ${token}`);
    this.http.get<MovieDetail>(`${this.appUrl}/movie/${id}/`, { headers })
      .subscribe(
        movie => {
          this.movie = movie;
          console.log('[Movie]', this.movie);
          this.modal = !this.modal;
          this.renderer.setAttribute(document.body, 'class', 'modal-open');
        },
        ({ error }) => {
          console.log('ERROR', error.message);
          this.message = error.message;
        }
      );
  }

  close(target) {
    if ( target.className !== 'movie-detail' ) return;
    this.modal = !this.modal;
    this.renderer.setAttribute(document.body, 'class', null);
  }

  getBoxOfficeDetail() {
    const token = this.auth.getToken();
    const headers = new HttpHeaders()
      .set('Authorization', `Token ${token}`);
    return this.http.get(`${this.appUrl}/movie/box-office/`, { headers })
      .shareReplay();
  }
}

