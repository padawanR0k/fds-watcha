import { Component, OnInit } from '@angular/core';

import { MovieCategoryService } from '../../shared/movie-category.service';

@Component({
  selector: 'my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  constructor(public category: MovieCategoryService) {}
  rateScore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ngOnInit() {
    this.category.defaultCategory();
  }
}