import { Component, OnInit } from '@angular/core';

import { BoxOfficePagenationService } from '../home/box-office-pagenation.service';
import { MovieDetailService } from '../core/movie-detail.service';

import { BoxofficeMovie } from '../shared/boxoffice-movie.interface';

@Component({
  selector: 'app-boxoffice',
  templateUrl: './boxoffice.component.html',
  styleUrls: ['./boxoffice.component.scss']
})
export class BoxofficeComponent implements OnInit {
  movieDetail: BoxofficeMovie;

  constructor(
    public boxOfficePage: BoxOfficePagenationService, 
    public movieDetailService: MovieDetailService
  ) { }
  
  ngOnInit() {
    this.boxOfficePage.loadTopFive();
    
    this.movieDetailService.getBoxOfficeDetail()
      .subscribe(
        movie => {
          this.movieDetail = movie;
        },
        ({ error }) => {
          console.log('ERROR', error.message);
        }
      );
  }
}
