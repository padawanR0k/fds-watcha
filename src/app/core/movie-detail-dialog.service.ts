import { Injectable, Renderer2, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../core/auth/services/auth.service';

import { MovieDetailDialogComponent } from '../shared/movie-detail-dialog/movie-detail-dialog.component';

import { MovieMemberDetail } from '../shared/movie-detail-dialog/movie-member-detail.interface';

import { environment } from '../../environments/environment';

@Injectable()
export class MovieDetailDialogService {

  // dialog: Element;
  movieMemberDetail: MovieMemberDetail;
  renderer: Renderer2;
  el: ElementRef;
  modal = false;
  moviePosterByDirector;
  
  appUrl = environment.apiUrl;

  constructor(
    public http: HttpClient,
    private auth: AuthService
  ) { }

  movieDetail() {
    const headers = new HttpHeaders()
    .set('Authorization', `Token ${this.auth.getToken()}`);
    this.http.get<MovieMemberDetail>(`${this.appUrl}/movie-members/14/`,
    { headers })
    .subscribe(res => {
      this.movieMemberDetail = res;
      this.moviePosterByDirector = this.movieMemberDetail.by_director_movie_list;
      console.log('res', this.movieMemberDetail);

      this.modal = !this.modal;
      this.renderer.addClass(document.body, 'director-open');
      // this.dialog = document.querySelector('.director-dialog');
      // this.renderer.setStyle(this.dialog, 'top', `${window.scrollY}px`);
      });
  }

  close(target) {
    if (target.className !== 'director-dialog') return;
    this.modal = !this.modal;
    this.renderer.removeClass(target, 'director-dialog');
  }

  // getDirectedMovieCount(): number {
  //   return this.movieMemberDetail.by_director_movie_list.length;
  // }

  // getStarringMovieCount(): number {
  //   return this.movieMemberDetail.by_main_actor_movie_list.length;
  // }

}

