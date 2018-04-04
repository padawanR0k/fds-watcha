import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { BoxOfficeRankingComponent } from './box-office-ranking/box-office-ranking.component';
import { MovieCategoryComponent } from './movie-category/movie-category.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    BoxOfficeRankingComponent,
    MovieCategoryComponent
  ],
  providers: [],
  exports: [
     HeaderComponent,
     BoxOfficeRankingComponent,
     MovieCategoryComponent
    ]
})
export class SharedModule { }
