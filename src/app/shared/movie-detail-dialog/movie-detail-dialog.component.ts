import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

import { MovieDetailDialogService } from '../../core/movie-detail-dialog.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'movie-detail-dialog',
  templateUrl: './movie-detail-dialog.component.html',
  styleUrls: ['./movie-detail-dialog.component.scss']
})
export class MovieDetailDialogComponent implements OnInit {
  movieDetail: Element;
  moviePosters: any;

  constructor(
    public http: HttpClient,
    private el: ElementRef,
    private renderer: Renderer2,
    public movieDetailDialogService: MovieDetailDialogService
  ) { }

  ngOnInit() {
    this.movieDetail = document.querySelector('.director-dialog');
    this.renderer.setStyle(this.movieDetail, 'top', `${window.scrollY}px`);
    this.http.get('http://localhost:3000/movieposter')
      .subscribe(res => {
          this.moviePosters = res;
      });
  }
}
