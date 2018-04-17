import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MoviePoster } from '../movie-poster.interface';


import { MovieDetailService } from '../../core/movie-detail.service';
import { CommnetDialogService } from '../../core/comment-dialog.service';

@Component({
  selector: 'movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {
  @Input() moviePoster: MoviePoster;
  rateScore = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  constructor(public http: HttpClient, public movieDetailService: MovieDetailService, public commnetDialogService: CommnetDialogService) {
  }
  rateFilm(target) {
    if (!this.moviePoster.rate || target.value !== this.moviePoster.rate  ) {
      this.moviePoster.rate = target.value;

      // 평가가 된적이 없다는 것이므로 평가한 별점을 db에 보낸다.
      // 없엇던 리소스를 추가하는 것이기 때문에 put을 통해 요청한다.
      this.http.put('http://localhost:3000/movieposter', {rate: target.value}, );
    } else if (target.value === this.moviePoster.rate) {

      // 평가한 별점이 이미 평가한 별점과 같다는 것으로 평가를 취소한다. === db의 평가를 false로 만든다.
      // 있던 rate를 수정하는 것이기 때문에 patch를 통해 요청한다.
      this.moviePoster.rate = 0;
      this.http.patch('http://localhost:3000/movieposter', {rate: target.value}, );
    }
  }
  ngOnInit() {}
}
