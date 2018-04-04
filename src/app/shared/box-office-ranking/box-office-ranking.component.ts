import { Component, OnInit, Input } from '@angular/core';

import { BoxofficeRanking } from './box-office-ranking.interface';

@Component({
  selector: 'box-office-ranking',
  templateUrl: './box-office-ranking.component.html',
  styleUrls: ['./box-office-ranking.component.scss']
})

export class BoxOfficeRankingComponent implements OnInit {

  boxOfficeRankingLists: BoxofficeRanking[];

  constructor() {
    this.boxOfficeRankingLists = [
      { id: 20, title: '레디 플레이어 원', link: '#'},
      { id: 19, title: '바람 바람 바람', link: '#'},
      { id: 18, title: '곤지암', link: '#'},
      { id: 17, title: '지금 만나러 갑니다', link: '#'},
      { id: 16, title: '레이디 버드' , link: '#'},
      { id: 15, title: '7년의 밤', link: '#'},
      { id: 14, title: '덕구' , link: '#'},
      { id: 13, title: '콜미 바이 유어 네임' , link: '#'},
      { id: 12, title: '펜텀 스레드' , link: '#'},
      { id: 11, title: '머니백' , link: '#'},
      { id: 10, title: '양의 나무' , link: '#'},
      { id: 9, title: '50가지 그림자: 해방' , link: '#'},
      { id: 8, title: '문호 스트레이독스' , link: '#'},
      { id: 7, title: '오늘밤, 로멘스 극장에서 ' , link: '#'},
      { id: 6, title: '퍼시픽 림: 업라이징' , link: '#'}
    ];
  }

  ngOnInit() {
    console.log(this.boxOfficeRankingLists);
  }

}
