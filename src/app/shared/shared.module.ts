import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxOfficeRankingComponent } from './box-office-ranking/box-office-ranking.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BoxOfficeRankingComponent, HeaderComponent],
  providers: [],
  exports: [BoxOfficeRankingComponent, HeaderComponent]
})
export class SharedModule { }
