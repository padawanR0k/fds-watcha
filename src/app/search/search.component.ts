import { Component, OnInit } from '@angular/core';

import { MoviePoster } from '../shared/movie-poster.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  moviePosters: MoviePoster[];

  constructor() {
    this.moviePosters = [
      { movieNm: '지금 만나러 갑니다.', rate: 0, posterUrl: '../../assets/images/지금 만나러 갑니다.jpg' },
      { movieNm: '레디플레이어 원', rate: 0, posterUrl: '../../assets/images/레디 플레이 원.jpg' },
      { movieNm: '바람 바람 바람', rate: 0, posterUrl: '../../assets/images/바람 바람 바람.jpg' },
      { movieNm: '곤지암', rate: 0, posterUrl: '../../assets/images/곤지암.jpg' },
    ];
  }

  rateScore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  rateFilm(target, index) {
    if (!this.moviePosters[index].rate) {
      this.moviePosters[index].rate = target.value;
    } else if (target.value === this.moviePosters[index].rate) {
      this.moviePosters[index].rate = 0;
    } else {
      this.moviePosters[index].rate = target.value;
    }
  }

  ngOnInit() {}

}
