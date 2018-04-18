import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

import { MovieDetailDialogService } from '../../core/movie-detail-dialog.service';

@Component({
  selector: 'movie-detail-dialog',
  templateUrl: './movie-detail-dialog.component.html',
  styleUrls: ['./movie-detail-dialog.component.scss']
})
export class MovieDetailDialogComponent implements OnInit {
  movieDetail: Element;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    public movieDetailDialogService: MovieDetailDialogService
  ) { }

  ngOnInit() {
    this.movieDetail = document.querySelector('.director-dialog');
    this.renderer.setStyle(this.movieDetail, 'top', `${window.scrollY}px`);
  }
}
