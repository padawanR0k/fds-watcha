import { Injectable, ElementRef, Renderer2 } from '@angular/core';

@Injectable()
export class MovieDetailService {
  renderer: Renderer2;
  el: ElementRef;
  modal = false;

  constructor() { }

  movieDetail() {
    this.modal = !this.modal;
    this.renderer.setAttribute(document.body, 'class', 'modal-open');
  }

  close(target) {
    if ( target.className !== 'movie-detail' ) return;
    this.modal = !this.modal;
    this.renderer.setAttribute(document.body, 'class', null);
  }
}

