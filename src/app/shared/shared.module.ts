import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MatDialogModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent, ModalEditProfile } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BoxOfficeRankingComponent } from './box-office-ranking/box-office-ranking.component';
import { MovieCategoryComponent } from './movie-category/movie-category.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    ModalEditProfile
  ],
  declarations: [
    BoxOfficeRankingComponent,
    HeaderComponent,
    MovieCategoryComponent,
    FooterComponent,
    ModalEditProfile
  ],
  providers: [],
  exports: [
    BoxOfficeRankingComponent,
    HeaderComponent,
    MovieCategoryComponent,
    FooterComponent,
    ModalEditProfile
  ]
})
export class SharedModule {}
