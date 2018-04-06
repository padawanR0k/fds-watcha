import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MypageComponent } from './mypage.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    MypageComponent
  ],
  exports: [
    MypageComponent
  ]
})
export class MypageModule { }
