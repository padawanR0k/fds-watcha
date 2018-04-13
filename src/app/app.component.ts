import { Component, Renderer2, ElementRef } from '@angular/core';
import { MovieDetailService } from './core/movie-detail.service';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  
  <ng-container *ngIf="movieDetailService.modal">
    <movie-detail></movie-detail>
  </ng-container>
  `
})
export class AppComponent {
  constructor(
    public movieDetailService: MovieDetailService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    movieDetailService.renderer = renderer;
    movieDetailService.el = el;
  }
}