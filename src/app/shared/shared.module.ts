import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BoxOfficeRankingComponent } from './box-office-ranking/box-office-ranking.component';
import { MovieCategoryComponent } from './movie-category/movie-category.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BoxOfficeRankingComponent,
    HeaderComponent,
    MovieCategoryComponent,
    FooterComponent
  ],
  providers: [],
  exports: [
    BoxOfficeRankingComponent,
    HeaderComponent,
    MovieCategoryComponent,
    FooterComponent
  ]
})
export class SharedModule {}
