import { Component, OnInit } from '@angular/core';

import { MovieCategory } from './movie-category.interface';

@Component({
  selector: 'movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.scss']
})
export class MovieCategoryComponent implements OnInit {

  movieCategoryLists: MovieCategory[];

  changeCategory(id) {
    console.log('id',id);
    this.movieCategoryLists.map((category) => {
      if (id === category.id) {
        category.active = true;
      } else {
        category.active = false;
      }
    });
  }

  constructor() {
    this.movieCategoryLists = [
      { id: 1, category: '역대 100만 관객 돌파 영화', active: false},
      { id: 2, category: '왓챠 평균 별점 TOP 영화', active: false },
      { id: 3, category: '전세계 흥행 TOP 영화', active: false  },
      { id: 4, category: '국내 누적관객수 TOP 영화', active: false  },
      { id: 5, category: '전문가 고평점 영화', active: false  },
      { id: 6, category: '저예산 독립 영화', active: false  },
      { id: 7, category: '고전 영화', active: false  },
      { id: 8, category: '느와르 영화', active: false  },
      { id: 9, category: '슈퍼 히어로 영화', active: false  },
      { id: 10, category: '스포츠 영화', active: false  },
      { id: 11, category: '범죄', active: false  },
      { id: 12, category: '드라마', active: false  },
      { id: 13, category: '코미디', active: false  }
    ];
  }

  ngOnInit() {
  }

}
