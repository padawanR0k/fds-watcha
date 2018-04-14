import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  constructor(public http: HttpClient) {}
  boxOffice;
  rateScore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  rateFilm(target, index) {
    if (!this.boxOffice[index].rate) {
      this.boxOffice[index].rate = target.value;
    } else if (target.value === this.boxOffice[index].rate) {
      this.boxOffice[index].rate = 0;
    } else {
      this.boxOffice[index].rate = target.value;
    }
  }
  ngOnInit() {
    this.http.get('http://localhost:3000/movieposter').subscribe(res => {
      this.boxOffice = res;
      console.log(this.boxOffice)
    });
  }
}
