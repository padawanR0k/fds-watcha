import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  IntroComponent,
  LoginComponent,
  JoinComponent,
  SearchComponent,
  MypageComponent,
  UserTasteComponent,
  WishlistComponent,
  CommentsComponent,
  WatchedMoviesComponent
} from './pages';

import { AuthGuard } from './core/auth/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'intro', component: IntroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'join', component: JoinComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'mypage', component: MypageComponent,
    children: [
      { path: '', redirectTo: 'wishlist', pathMatch: 'full' },
      { path: 'userTaste', component: UserTasteComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'Watched', component: WatchedMoviesComponent },
      { path: 'comments', component: CommentsComponent }
    ]
  }
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
