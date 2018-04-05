import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from '../pages';

import {
  VisualComponent,
  TodayBoxOfficeComponent,
  MyMoviesComponent,
  NewMoviesComponent,
  ThemeMoviesComponent,
  NewMoviesPostComponent
} from './';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    VisualComponent,
    TodayBoxOfficeComponent,
    MyMoviesComponent,
    NewMoviesComponent,
    ThemeMoviesComponent,
    NewMoviesPostComponent
  ],
  exports: [
    HomeComponent,
    VisualComponent,
    TodayBoxOfficeComponent,
    MyMoviesComponent,
    NewMoviesComponent,
    ThemeMoviesComponent,
    NewMoviesPostComponent
  ]
})
export class HomeModule { }
