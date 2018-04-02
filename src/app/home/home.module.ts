import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualComponent } from '../home/visual/visual.component';
import { TodayBoxOfficeComponent } from '../home/today-box-office/today-box-office.component';
import { MyMoviesComponent } from '../home/my-movies/my-movies.component';
import { NewMoviesComponent } from '../home/new-movies/new-movies.component';
import { ThemeMoviesComponent } from '../home/theme-movies/theme-movies.component';
import { NewMoviesPostComponent } from './new-movies-post/new-movies-post.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VisualComponent,
    TodayBoxOfficeComponent,
    MyMoviesComponent,
    NewMoviesComponent,
    ThemeMoviesComponent,
    NewMoviesPostComponent
  ],
  exports: [
    VisualComponent,
    TodayBoxOfficeComponent,
    MyMoviesComponent,
    NewMoviesComponent,
    ThemeMoviesComponent,
    NewMoviesPostComponent
  ]
})
export class HomeModule { }
