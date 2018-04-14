import { Component, OnInit } from '@angular/core';

import { PreloaderService } from '../preloader';
// import { Mypageuser } from './mypageuser.interface';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})
export class MypageComponent implements OnInit {

  userMovieInfo = [
      {
        name: 'Hee Chang Kang',
        pic: '../../assets/images/khc.jpg',
        watchedMovieHour: 100,
        watchedMoviCount: 50,
        like: 5
      }
    ];

  constructor(public preloader: PreloaderService) { }

  ngOnInit() {
    this.preloader.show();
    this.preloader.hide();
  }

  // userMovieInfo: Mypageuser[];

  // constructor() {
  //   this.userMovieInfo = [
  //     {
  //       name: 'Hee Chang Kang',
  //       pic: '../../assets/images/khc.jpg',
  //       watchedMovieHour: 100,
  //       watchedMoviCount: 50,
  //       like: 5
  //     }
  //   ];
  // }

  // ngOnInit() {
  // }

}
