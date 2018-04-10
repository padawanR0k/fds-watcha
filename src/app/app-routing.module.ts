import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  IntroComponent,
  LoginComponent,
  JoinComponent,
  SearchComponent,
  MypageComponent
} from './pages';

import { AuthGuard } from './core/auth/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'home',
    component: HomeComponent
    // canActivate: [ AuthGuard ]
  },
  { path: 'intro', component: IntroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'join', component: JoinComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'mypage',
    component: MypageComponent
  }
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
