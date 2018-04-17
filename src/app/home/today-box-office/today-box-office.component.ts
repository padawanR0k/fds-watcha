import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'today-box-office',
  templateUrl: './today-box-office.component.html',
  styleUrls: ['./today-box-office.component.scss']
})
export class TodayBoxOfficeComponent implements OnInit {
  constructor( public http: HttpClient) {}
  boxOffice: any = [
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

  ngOnInit() {
    this.http.get('http://localhost:3000/movieposter').subscribe(res => {
      this.boxOffice = res;
      console.log(this.boxOffice);
    });
  }
}
