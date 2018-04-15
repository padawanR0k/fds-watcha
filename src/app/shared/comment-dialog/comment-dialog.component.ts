import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.scss']
})
export class CommentDialogComponent implements OnInit {
  constructor() {}

  submitComment(comment) {
    // 유저pk, 영화이름, 코멘트
    console.log(comment);
  }
  ngOnInit() {}
}
