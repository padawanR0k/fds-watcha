import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { JoinComponent } from './join.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [JoinComponent],
  exports: [JoinComponent]
})
export class JoinModule {}
