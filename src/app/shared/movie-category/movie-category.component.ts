import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MovieCategory } from './movie-category.interface';

import { MovieCategoryService } from '../movie-category.service';

@Component({
  selector: 'movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.scss']
})
export class MovieCategoryComponent implements OnInit {
  movieCategoryLists: MovieCategory[];
  constructor(public http: HttpClient, public category: MovieCategoryService) {
    this.movieCategoryLists = [
      { id: 1, genre: 'classic', category: '고전 영화', active: true },
      { id: 2, genre: 'noir', category: '느와르 영화', active: false },
      { id: 3, genre: 'hero', category: '슈퍼 히어로 영화', active: false },
      { id: 4, genre: 'sports', category: '스포츠 영화', active: false },
      { id: 5, genre: 'crime', category: '범죄', active: false },
      { id: 6, genre: 'drama', category: '드라마', active: false },
      { id: 7, genre: 'comedy', category: '코미디', active: false },
      { id: 8, genre: 'romance', category: '로맨스/멜로', active: false },
      { id: 9, genre: 'thriller', category: '스릴러', active: false },
      {
        id: 10,
        genre: 'romanticComedy',
        category: '로맨틱코미디',
        active: false
      },
      { id: 11, genre: 'war', category: '전쟁', active: false },
      { id: 12, genre: 'family', category: '가족', active: false },
      { id: 13, genre: 'fantasy', category: '판타지', active: false },
      { id: 14, genre: 'action', category: '액션', active: false },
      { id: 15, genre: 'SF', category: 'SF', active: false },
      { id: 16, genre: 'animation', category: '애니메이션', active: false },
      { id: 17, genre: 'documentary', category: '다큐멘터리', active: false },
      { id: 18, genre: 'horror', category: '공포', active: false }
    ];
  }

  changeCategory(genre) {
    this.category.changeCategory(genre);
    this.movieCategoryLists.map(category => {
      if (genre === category.genre) {
        category.active = true;
      } else {
        category.active = false;
      }
    });
  }
  ngOnInit() {
    // this.http.get('http://localhost:3000/movieposter').subscribe(res => {
    //   this.movieCategoryLists = res;
    //   console.log(this.movieCategoryLists);
    // });
  }
}

