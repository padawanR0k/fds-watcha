import { Component, OnInit } from '@angular/core';

import { MovieCategoryService } from '../../shared/movie-category/movie-category.service';

@Component({
  selector: 'my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  constructor(public category: MovieCategoryService) {}
  ngOnInit() {
    this.category.defaultCategory();
  }
}
