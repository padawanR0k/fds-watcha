import { Component, OnInit } from '@angular/core';

import { MoviePoster } from '../../shared/movie-poster.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  moviePosters: MoviePoster[];

  constructor() {
    this.moviePosters = [
      {
        movieNm: '지금 만나러 갑니다',
        rate: 0,
        posterUrl: '../../assets/images/bewithyou.jpg',
        year: 2017,
        title: '지금 만나러 갑니다',
        director: '이장훈',
        actor: '소지섭, 손예진'
      },
      {
        movieNm: '레디플레이어 원',
        rate: 0,
        posterUrl: '../../assets/images/readyplayone.jpg',
        year: 2018,
        title: 'Ready Player One',
        director: '스티븐 스필버그',
        actor: '타이 셰리던, 올리비아 쿡, 벤 멘델슨'
      },
      {
        movieNm: '바람 바람 바람',
        rate: 0,
        posterUrl: '../../assets/images/windwindwind.jpg',
        year: 2017,
        title: 'What a Man Wants',
        director: '이병헌',
        actor: '위하준, 박지현, 오아연, 문예원, 박성훈, 유제윤, 박지현, 오아연, 문예원, 박성훈, 유제윤, 박지현, 오아연, 문예원, 박성훈, 유제윤'
      },
      {
        movieNm: '곤지암',
        rate: 0,
        posterUrl: '../../assets/images/gonjiam.jpg',
        year: 2018,
        title: '곤지암',
        director: '정범식',
        actor: '위하준, 박지현, 오아연, 문예원, 박성훈, 유제윤'
      },
      {
        movieNm: '그날, 바다',
        rate: 0,
        posterUrl: '../../assets/images/Intention.jpg',
        year: 2018,
        title: 'Intention',
        director: '김지영',
        actor: '정우성'
      },
      {
        movieNm: '지금 만나러 갑니다',
        rate: 0,
        posterUrl: '../../assets/images/bewithyou.jpg',
        year: 2017,
        title: '지금 만나러 갑니다',
        director: '이장훈',
        actor: '소지섭, 손예진'
      },
      {
        movieNm: '레디플레이어 원',
        rate: 0,
        posterUrl: '../../assets/images/readyplayone.jpg',
        year: 2018,
        title: 'Ready Player One',
        director: '스티븐 스필버그',
        actor: '타이 셰리던, 올리비아 쿡, 벤 멘델슨'
      },
      {
        movieNm: '바람 바람 바람',
        rate: 0,
        posterUrl: '../../assets/images/windwindwind.jpg',
        year: 2017,
        title: 'What a Man Wants',
        director: '이병헌',
        actor: '위하준, 박지현, 오아연, 문예원, 박성훈, 유제윤, 박지현, 오아연, 문예원, 박성훈, 유제윤, 박지현, 오아연, 문예원, 박성훈, 유제윤'
      },
      {
        movieNm: '곤지암',
        rate: 0,
        posterUrl: '../../assets/images/gonjiam.jpg',
        year: 2018,
        title: '곤지암',
        director: '정범식',
        actor: '위하준, 박지현, 오아연, 문예원, 박성훈, 유제윤'
      },
      {
        movieNm: '그날, 바다',
        rate: 0,
        posterUrl: '../../assets/images/Intention.jpg',
        year: 2018,
        title: 'Intention',
        director: '김지영',
        actor: '정우성'
      }
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

  ngOnInit() {
  }

}
