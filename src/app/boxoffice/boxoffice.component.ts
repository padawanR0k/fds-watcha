import { Component, OnInit } from '@angular/core';

import { BoxOfficePagenationService } from '../home/box-office-pagenation.service';
import { MovieDetailService } from '../core/movie-detail.service';

@Component({
  selector: 'app-boxoffice',
  templateUrl: './boxoffice.component.html',
  styleUrls: ['./boxoffice.component.scss']
})
export class BoxofficeComponent implements OnInit {
  movieDetail;

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
          console.log('[Movie1]', this.movieDetail);
        },
        ({ error }) => {
          console.log('ERROR', error.message);
        }
      );
  }
}
