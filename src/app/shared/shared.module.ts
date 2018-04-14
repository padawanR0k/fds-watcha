import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MatDialogModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormGroup } from '@angular/forms';

import { HeaderComponent, ModalEditProfile } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BoxOfficeRankingComponent } from './box-office-ranking/box-office-ranking.component';
import { MovieCategoryComponent } from './movie-category/movie-category.component';
import { MoviePosterComponent } from './movie-poster/movie-poster.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PreloaderComponent } from './preloader';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    ModalEditProfile
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BoxOfficeRankingComponent,
    MovieCategoryComponent,
    ModalEditProfile,
    MoviePosterComponent,
    MovieDetailComponent,
    PreloaderComponent
  ],
  providers: [],
  exports: [
    BoxOfficeRankingComponent,
    HeaderComponent,
    MovieCategoryComponent,
    FooterComponent,
    MoviePosterComponent,
    ModalEditProfile,
    MovieDetailComponent,
    PreloaderComponent
  ]
})
export class SharedModule {}
