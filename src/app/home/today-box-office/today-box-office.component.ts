import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'today-box-office',
  templateUrl: './today-box-office.component.html',
  styleUrls: ['./today-box-office.component.scss']
})
export class TodayBoxOfficeComponent implements OnInit {

  moviePosters: any;

  url = ' http://localhost:3000/movieposter';
  constructor(
    public http: HttpClient
  ) { }

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
    this.http.get(this.url)
      .subscribe(res => {
        this.moviePosters = res;
        // console.log('boxOffice', this.moviePosters);
    });
  }

  // url: 'http://localhost:3000/movieposeters';

  // constructor(
  //   public http: HttpClient
  // ) { }

  // boxOffice: any = [
  //   {
  //     title: '레디플레이어 원',
  //     rate: 0,
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1521617852/guetszfm472lbu0ypxp2.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   }
  // ];

  // rateScore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // rateFilm(target, index) {
  //   if (!this.boxOffice[index].rate) {
  //     this.boxOffice[index].rate = target.value;
  //   } else if (target.value === this.boxOffice[index].rate) {
  //     this.boxOffice[index].rate = 0;
  //   } else {
  //     this.boxOffice[index].rate = target.value;
  //   }
  // }

  // ngOnInit() {
  //   this.http.get(this.url)
  //     .subscribe(res => {
  //     this.boxOffice = res;
  //     console.log('boxOffice', this.boxOffice);
  //   });
  // }
}

