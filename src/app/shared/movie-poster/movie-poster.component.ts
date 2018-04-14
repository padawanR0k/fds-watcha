import { Component, OnInit, Input } from '@angular/core';
import { MoviePoster } from '../movie-poster.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {
  @Input() moviePoster: MoviePoster;
  @Input() rateScore: Number[];
  constructor(public http: HttpClient) {
    console.log();
  }
  rateFilm(target, index) {
    this.http.put('http://localhost:3000/movieposter', {rate: target.value}, );
    // if (!this.moviePoster[index].rate) {
    //   this.moviePoster[index].rate = target.value;
    // } else if (target.value === this.moviePoster[index].rate) {
    //   this.moviePoster[index].rate = 0;
    // } else {
    //   this.moviePoster[index].rate = target.value;
    // }
  }
  ngOnInit() {}
}
