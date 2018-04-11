import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { JoinModule } from './join/join.module';
import { IntroModule } from './intro/intro.module';
import { SearchModule } from './search/search.module';
import { MypageModule } from './mypage/mypage.module';

import { HttpClientModule } from '@angular/common/http';

import { JwtHelper } from 'angular2-jwt';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AuthService } from './core/auth/services/auth.service';
import { UserService } from './core/auth/services/user.service';
import { SocialAuthService } from './core/auth/services/social-auth.service';

import { AuthGuard } from './core/auth/guards/auth.guard';

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
    AppRoutingModule
  ],
  providers: [
    AuthService,
    SocialAuthService,
    UserService,
    AuthGuard,
    JwtHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
