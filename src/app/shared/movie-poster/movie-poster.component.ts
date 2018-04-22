import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MoviePoster } from '../movie-poster.interface';

import { MovieDetailService } from '../../core/movie-detail.service';
import { CommnetDialogService } from '../../core/comment-dialog.service';

import { environment } from '../../../environments/environment.prod';
import { AuthService } from '../../core/auth/services/auth.service';
import { UserService } from '../../core/auth/services/user.service';
import { UserCheckedService, UserWatched } from '../../core/user-checked.service';

export interface CheckMovie {
  user_want_movie: boolean;
  user_watched_movie: boolean;
  rating: string;
  comment: string;
  movie: number;
  user?: number;
  id?: number;
}
export interface UserActionResponse {
  id: number;
  user_want_movie: boolean;
  user_watched_movie: boolean;
  rating: string;
  comment: string;
  modified_date: string;
  created_date: string;
  user: number;
  movie: number;
}


@Component({
  selector: 'movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit{
  @Input() moviePoster: MoviePoster;
  @Input() posterSizeLarge: boolean;

  rateScore = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  userAction: CheckMovie;
  userActionResponse: UserActionResponse;
  apiUrl = environment.apiUrl;
  httpOptions: HttpHeaders;
  rating: number;

  constructor(
    public http: HttpClient,
    public movieDetailService: MovieDetailService,
    public commnetDialogService: CommnetDialogService,
    private authService: AuthService,
    private user: UserService,
    public  userChecked: UserCheckedService
  ) {
  }


  rateFilm(target, want, watched, rate, moviePK, comment) {
    // console.log(target.value);
    const headers = (this.httpOptions = new HttpHeaders()
      .set('Authorization', `token ${this.authService.getToken()}`)
      .set('Content-Type', 'application/json'));


    this.userAction = {
      comment: '임시',
      movie: moviePK,
      rating: `${rate}`,
      user_want_movie: false, // 임시
      user_watched_movie: true // 임시
    };
    console.log(this.userAction);


    if ( !this.rating ) {
      // 평가내역이 없다면 내역을 생성한다.
      this.http.post<UserActionResponse>(`${this.apiUrl}/movie/user-checked-movie/create/`, this.userAction, { headers })
        .subscribe(res => {
          this.userActionResponse = res;
          this.rating = +res.rating;
        });
    } else if (this.rating === rate) {
      // 평가한 점수 === 클릭한점수면 별을 삭제한다.
      this.userAction.rating = null;
      this.userAction.user_watched_movie = false;
      this.http.put<UserActionResponse>(`${this.apiUrl}/movie/user-checked-movie/create/${moviePK}`, this.userAction, { headers })
        .subscribe(res => {
          this.userActionResponse = res;
          this.rating = null;
        });
    } else if ( this.rating && this.rating !== rate ) {
      // 평가한 별점이 존재하는데, 지금 평가한 별점과 다르면 수정한다.
      this.http.put<UserActionResponse>(`${this.apiUrl}/movie/user-checked-movie/create/${moviePK}`, this.userAction, { headers })
        .subscribe(res => {
          this.userActionResponse = res;
          this.rating = +res.rating;
        });
    }
  }
  isWatched() {
    this.userChecked.userWatched.map(item => {
      if (item.id === this.moviePoster.id) {
        this.rating = item.login_user_checked.rating;
      }
    });
  }
  ngOnInit() {
    // console.log(this.userChecked.getWatchedList());
    console.log(this.userChecked.userWatched);
    console.log(this.moviePoster , '넘어오는 영화의 정보');
    this.isWatched();
  }
}
