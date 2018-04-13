import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { AgWordCloudModule } from 'angular4-word-cloud';

import { MypageComponent } from './mypage.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CommentsComponent } from './comments/comments.component';
import { WatchedMoviesComponent } from './watched-movies/watched-movies.component';
import { UserTasteComponent } from './user-taste/user-taste.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ChartsModule,
    AgWordCloudModule.forRoot()
  ],
  declarations: [
    MypageComponent,
    WishlistComponent,
    CommentsComponent,
    WatchedMoviesComponent,
    UserTasteComponent
  ],
  exports: [MypageComponent]
})
export class MypageModule {}
