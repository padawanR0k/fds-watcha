import { Injectable, Renderer2, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';

import { MovieDetailDialogComponent } from '../shared/movie-detail-dialog/movie-detail-dialog.component';

@Injectable()
export class MovieDetailDialogService {

  renderer: Renderer2;
  el: ElementRef;
  modal = false;

  constructor() { }

  movieDetail() {
    this.modal = !this.modal;
    this.renderer.addClass(document.body, 'director-open');
  }

  close(target) {
    if (target.className !== 'director-dialog') return;
    this.modal = !this.modal;
    this.renderer.removeClass(target, 'director-dialog');
  }
}

