import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { JoinModule } from './join/join.module';
import { IntroModule } from './intro/intro.module';

import { JwtHelper } from 'angular2-jwt';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    JoinModule,
    IntroModule,
    HttpClientModule
<<<<<<< HEAD
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuard,
    JwtHelper
=======
>>>>>>> f1775def6d9b7d146ef4b82c7f2fffe9383e55b7
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
