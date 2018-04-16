import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PreloaderService } from '../../shared/preloader';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: any;

  url = 'http://localhost:3000/comments';
  constructor(
    public http: HttpClient,
    public preloader: PreloaderService) { }

  rateScore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  rateFilm(target, index) {
    if (!this.comments[index].rate) {
      this.comments[index].rate = target.value;
    } else if (target.value === this.comments[index].rate) {
      this.comments[index].rate = 0;
    } else {
      this.comments[index].rate = target.value;
    }
  }

  ngOnInit() {
    this.preloader.show();
    this.http.get(this.url)
      .subscribe(res => {
        setTimeout(() => {
          this.comments = res;
          this.preloader.hide();
        }, 2000);
      });
    }
  // comments = [
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 5,
  //     genre: '드라마',
  //     runtime: 116,
  //     movieDate: 2018,
  //     likeCnt: 1,
  //     comment: '재밌네요',
  //     commentDate: {
  //       year: 2018,
  //       month: 4,
  //       day: 1
  //     },
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_700,q_80,w_490/v1521617852/guetszfm472lbu0ypxp2.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 3,
  //     genre: '드라마',
  //     runtime: 116,
  //     movieDate: 2018,
  //     likeCnt: 1,
  //     comment: '재밌네요',
  //     commentDate: {
  //       year: 2018,
  //       month: 4,
  //       day: 1
  //     },
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 1,
  //     genre: '드라마',
  //     runtime: 116,
  //     movieDate: 2018,
  //     likeCnt: 1,
  //     comment: '재밌네요',
  //     commentDate: {
  //       year: 2018,
  //       month: 4,
  //       day: 1
  //     },
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     genre: '드라마',
  //     runtime: 116,
  //     movieDate: 2018,
  //     likeCnt: 1,
  //     comment: '재밌네요',
  //     commentDate: {
  //       year: 2018,
  //       month: 4,
  //       day: 1
  //     },
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     genre: '드라마',
  //     runtime: 116,
  //     movieDate: 2018,
  //     likeCnt: 1,
  //     comment: '재밌네요',
  //     commentDate: {
  //       year: 2018,
  //       month: 4,
  //       day: 1
  //     },
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     genre: '드라마',
  //     runtime: 116,
  //     movieDate: 2018,
  //     likeCnt: 1,
  //     comment: '재밌네요',
  //     commentDate: {
  //       year: 2018,
  //       month: 4,
  //       day: 1
  //     },
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     genre: '드라마',
  //     runtime: 116,
  //     movieDate: 2018,
  //     likeCnt: 1,
  //     comment: '재밌네요',
  //     commentDate: {
  //       year: 2018,
  //       month: 4,
  //       day: 1
  //     },
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     genre: '드라마',
  //     runtime: 116,
  //     movieDate: 2018,
  //     likeCnt: 1,
  //     comment: '재밌네요',
  //     commentDate: {
  //       year: 2018,
  //       month: 4,
  //       day: 1
  //     },
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     genre: '드라마',
  //     runtime: 116,
  //     movieDate: 2018,
  //     likeCnt: 1,
  //     comment: '재밌네요',
  //     commentDate: {
  //       year: 2018,
  //       month: 4,
  //       day: 1
  //     },
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     genre: '드라마',
  //     runtime: 116,
  //     movieDate: 2018,
  //     likeCnt: 1,
  //     comment: '재밌네요',
  //     commentDate: {
  //       year: 2018,
  //       month: 4,
  //       day: 1
  //     },
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     genre: '드라마',
  //     runtime: 116,
  //     movieDate: 2018,
  //     likeCnt: 1,
  //     comment: '재밌네요',
  //     commentDate: {
  //       year: 2018,
  //       month: 4,
  //       day: 1
  //     },
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     genre: '드라마',
  //     runtime: 116,
  //     movieDate: 2018,
  //     likeCnt: 1,
  //     comment: '재밌네요',
  //     commentDate: {
  //       year: 2018,
  //       month: 4,
  //       day: 1
  //     },
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     genre: '드라마',
  //     runtime: 116,
  //     movieDate: 2018,
  //     likeCnt: 1,
  //     comment: '재밌네요',
  //     commentDate: {
  //       year: 2018,
  //       month: 4,
  //       day: 1
  //     },
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     genre: '드라마',
  //     runtime: 116,
  //     movieDate: 2018,
  //     likeCnt: 1,
  //     comment: '재밌네요',
  //     commentDate: {
  //       year: 2018,
  //       month: 4,
  //       day: 1
  //     },
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   },
  //   {
  //     movieNm: '레디플레이어 원',
  //     rate: 0,
  //     genre: '드라마',
  //     runtime: 116,
  //     movieDate: 2018,
  //     likeCnt: 1,
  //     comment: '재밌네요',
  //     commentDate: {
  //       year: 2018,
  //       month: 4,
  //       day: 1
  //     },
  //     posterUrl:
  //       'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1519955226/vvnr4dqs6rxnxbc4mgvq.jpg'
  //   }
  // ];

  // rateScore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // constructor() {}
  // rateFilm(target, index) {
  //   if (!this.comments[index].rate) {
  //     this.comments[index].rate = target.value;
  //   } else if (target.value === this.comments[index].rate) {
  //     this.comments[index].rate = 0;
  //   } else {
  //     this.comments[index].rate = target.value;
  //   }
  // }

  // ngOnInit() {}
}
