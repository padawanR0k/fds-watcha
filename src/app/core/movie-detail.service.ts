import { Injectable, ElementRef, Renderer2 } from '@angular/core';

import { environment } from '../../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth/services/auth.service';

@Injectable()
export class MovieDetailService {
  appUrl = environment.apiUrl;
  renderer: Renderer2;
  el: ElementRef;
  modal = false;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  movieDetail(id) {
    console.log('[ID]', id);
    const token = this.auth.getToken();
    const headers = new HttpHeaders()
      .set('Authorization', `Token ${token}`);
    this.http.get(`${this.appUrl}/movie/id/`, { headers })
      .subscribe(
        (res) => { console.log(res) },
        ({ error }) => {
          console.log('ERROR', error.message);
          this.message = error.message;
        }
      );


    this.modal = !this.modal;
    this.renderer.setAttribute(document.body, 'class', 'modal-open');
  }

  close(target) {
    if ( target.className !== 'movie-detail' ) return;
    this.modal = !this.modal;
    this.renderer.setAttribute(document.body, 'class', null);
  }
}

