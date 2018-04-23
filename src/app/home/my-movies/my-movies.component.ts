import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

import { MovieCategoryService } from '../../shared/movie-category/movie-category.service';
import { UserCheckedService } from '../../core/user-checked.service';

@Component({
  selector: 'my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements AfterViewInit {
  @Input() page;
  constructor(
    public userChecked: UserCheckedService,
    public category: MovieCategoryService
  ) {}
  ngAfterViewInit() {
    this.category.defaultCategory(this.page);
  }
}
