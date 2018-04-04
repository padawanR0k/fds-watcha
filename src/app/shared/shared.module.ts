import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxOfficeRankingComponent } from './box-office-ranking/box-office-ranking.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BoxOfficeRankingComponent, HeaderComponent, FooterComponent],
  providers: [],
  exports: [BoxOfficeRankingComponent, HeaderComponent, FooterComponent]
})
export class SharedModule {}
