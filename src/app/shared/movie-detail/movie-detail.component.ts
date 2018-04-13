import { Component, OnInit } from '@angular/core';
import { MovieDetailService } from '../../core/movie-detail.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor(public movieDetailService: MovieDetailService) { }

  ngOnInit() {
    const movieDetail = document.querySelector('.movie-detail');
    movieDetail.setAttribute('style', `top: ${window.scrollY}px`);
  }
}
