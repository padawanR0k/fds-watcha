import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  IntroComponent,
  LoginComponent,
  JoinComponent,
  SearchComponent
} from './pages';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'join', component: JoinComponent },
  { path: 'search', component: SearchComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
