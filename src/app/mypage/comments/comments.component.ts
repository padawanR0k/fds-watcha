import { Component, OnInit } from '@angular/core';

import { PreloaderService } from '../../preloader';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments;

  rateScore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(public http: HttpClient, public preloader: PreloaderService) {}


  ngOnInit() {
    this.preloader.show();
    this.http.get('http://localhost:3000/user/').subscribe(res => {
      setTimeout(() => {
        this.comments = res.comment;
        this.preloader.hide();
      }, 1000);
    });
  }
}
