import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  constructor() {}
  boxOffice = [
    {
      movieNm: '레디플레이어 원',
      rate: 0,
      posterUrl:
        'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1521617852/guetszfm472lbu0ypxp2.jpg'
    },
    {
      movieNm: '레디플레이어 원',
      rate: 0,
      posterUrl:
        'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
    },
    {
      movieNm: '레디플레이어 원',
      rate: 0,
      posterUrl:
        'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
    },
    {
      movieNm: '레디플레이어 원',
      rate: 0,
      posterUrl:
        'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
    },
    {
      movieNm: '레디플레이어 원',
      rate: 0,
      posterUrl:
        'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
    },
    {
      movieNm: '레디플레이어 원',
      rate: 0,
      posterUrl:
        'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
    },
    {
      movieNm: '레디플레이어 원',
      rate: 0,
      posterUrl:
        'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
    },
    {
      movieNm: '레디플레이어 원',
      rate: 0,
      posterUrl:
        'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
    },
    {
      movieNm: '레디플레이어 원',
      rate: 0,
      posterUrl:
        'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
    },
    {
      movieNm: '레디플레이어 원',
      rate: 0,
      posterUrl:
        'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
    },
    {
      movieNm: '레디플레이어 원',
      rate: 0,
      posterUrl:
        'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
    },
    {
      movieNm: '레디플레이어 원',
      rate: 0,
      posterUrl:
        'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
    },
    {
      movieNm: '레디플레이어 원',
      rate: 0,
      posterUrl:
        'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
    },
    {
      movieNm: '레디플레이어 원',
      rate: 0,
      posterUrl:
        'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
    },
    {
      movieNm: '레디플레이어 원',
      rate: 0,
      posterUrl:
        'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
    }
  ];
  rateScore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  rateFilm(target, index) {
    if (!this.boxOffice[index].rate) {
      this.boxOffice[index].rate = target.value;
    } else if (target.value === this.boxOffice[index].rate) {
      this.boxOffice[index].rate = 0;
    } else {
      this.boxOffice[index].rate = target.value;
    }
  }
  ngOnInit() {}
}
