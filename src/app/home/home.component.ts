import { Component, OnInit } from '@angular/core';

import { ThemeMovies } from './shared/theme-movies.interface';


// import { HttpClient } from 'selenium-webdriver/http';
// import { environment } from '../../environments/environment';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  themeMovieList: ThemeMovies[];
  // url = environment.url;

  constructor() {
    this.themeMovieList = [
      { id: 10, link: '', content: '드라마', image: '' },
      { id: 9, link: '', content: '공포', image: '' },
      { id: 8, link: '', content: '로맨스', image: '' },
      { id: 7, link: '', content: '느와르', image: '' },
      { id: 6, link: '', content: '다큐멘터리', image: '' },
      { id: 5, link: '', content: '액션', image: '' },
      { id: 4, link: '', content: '로맨틱 코메디', image: '' },
      { id: 3, link: '', content: '애니메이션', image: '' },
      { id: 2, link: '', content: '로멘스, 멜로', image: '' },
      { id: 1, link: '', content: '스릴러', image: '' }
    ];
  }

  ngOnInit() {
  }

  // getTodos() {
  //   this.http.get<ThemeMovies[]>(this.url)
  //     .subscribe(movies => this.themeMovieList = themeMovieList);
  // }
}
