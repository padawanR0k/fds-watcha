import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  declarations: [
    AppComponent,
    IntroComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
