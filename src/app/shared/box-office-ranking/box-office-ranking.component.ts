import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { BoxofficeRanking } from './box-office-ranking.interface';

@Component({
  selector: 'box-office-ranking',
  templateUrl: './box-office-ranking.component.html',
  styleUrls: ['./box-office-ranking.component.scss']
})

export class BoxOfficeRankingComponent implements OnInit {

  // boxOfficeRankingLists: BoxofficeRanking[];
  // url = 'http://localhost:3000/boxoffice';

  // constructor(public http: HttpClient) { }

  // ngOnInit() {
    //   this.http.get<BoxofficeRanking[]>(this.url)
    //     .subscribe(list => this.boxOfficeRankingLists = list);
    // }

boxOfficeRankingLists: BoxofficeRanking[];

constructor() {
  this.boxOfficeRankingLists = [
    { ranking: 1, title: '레디 플레이어 원', link: '#'},
    { ranking: 2, title: '바람 바람 바람', link: '#'},
    { ranking: 3, title: '곤지암', link: '#'},
    { ranking: 4, title: '지금 만나러 갑니다', link: '#'},
    { ranking: 5, title: '레이디 버드' , link: '#'},
    { ranking: 6, title: '7년의 밤', link: '#'},
    { ranking: 7, title: '덕구' , link: '#'},
    { ranking: 8, title: '콜미 바이 유어 네임' , link: '#'},
    { ranking: 9, title: '펜텀 스레드' , link: '#'},
    { ranking: 10, title: '머니백' , link: '#'},
    { ranking: 11, title: '양의 나무' , link: '#'},
    { ranking: 12, title: '50가지 그림자: 해방' , link: '#'},
    { ranking: 13, title: '문호 스트레이독스' , link: '#'},
    { ranking: 14, title: '오늘밤, 로멘스 극장에서 ' , link: '#'},
    { ranking: 16, title: '퍼시픽 림: 업라이징' , link: '#'},
    { ranking: 17, title: '소공녀' , link: '#'},
    { ranking: 18, title: '내 이야기!!!' , link: '#'},
    { ranking: 19, title: '레드 스패로' , link: '#'}
    ];
  }

  ngOnInit() { }

}
