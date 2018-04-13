import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { JoinModule } from './join/join.module';
import { IntroModule } from './intro/intro.module';
import { SearchModule } from './search/search.module';
import { MypageModule } from './mypage/mypage.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { AuthService } from './core/auth/services/auth.service';
import { SocialAuthService } from './core/auth/services/social-auth.service';
import { UserService } from './core/auth/services/user.service';
import { MovieDetailService } from './core/movie-detail.service';
import { PreloaderService } from './shared/preloader';

import { AuthGuard } from './core/auth/guards/auth.guard';
import { JwtHelper } from 'angular2-jwt';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    LoginModule,
    JoinModule,
    IntroModule,
    SearchModule,
    MypageModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService,
    SocialAuthService,
    UserService,
    AuthGuard,
    JwtHelper,
    MovieDetailService,
    PreloaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
