import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material';

import { CommentDialogComponent } from '../shared/comment-dialog/comment-dialog.component';

@Injectable()
export class CommnetDialogService {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      height: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}
