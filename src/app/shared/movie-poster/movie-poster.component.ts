import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { MovieDetailService } from '../../core/movie-detail.service';
import { CommnetDialogService } from '../../core/comment-dialog.service';

import { environment } from '../../../environments/environment.prod';
import { AuthService } from '../../core/auth/services/auth.service';
import { UserService } from '../../core/auth/services/user.service';

export interface CheckMovie {
  rating: number;
  movie: number;
  user_want_movie?: boolean;
  user_watched_movie?: boolean;
  comment?: string;
  user?: number;
  id?: number;
}
export interface UserActionResponse {
  id: number;
  user_want_movie: boolean;
  user_watched_movie: boolean;
  rating: number;
  comment: string;
  modified_date: string;
  created_date: string;
  user: number;
  movie: number;
}
export interface ShortMoviePoster {
  id: number;
  title_ko: string;
  title_en: string;
  rating_avg: number;
  nation: string;
  poster_image: string;
  genre: [
    {
      id: number;
      genre: string;
    }
  ];
  running_time: number;
  login_user_checked?: {
    id: number;
    user_want_movie: boolean;
    user_watched_movie: boolean;
    rating: string;
    comment: string;
    user: number;
    movie: number;
  };
}

@Component({
  selector: 'movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit{
  @Input() moviePoster: ShortMoviePoster;
  @Input() posterSizeLarge: boolean;
  @Input() posterSmall: boolean;

  rateScore = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  userAction: CheckMovie;
  userActionResponse: UserActionResponse;
  apiUrl = environment.apiUrl;
  httpOptions: HttpHeaders;

  rating: number;
  checkedId: number;
  comment: boolean;
  want: boolean;
  watched: boolean;
  userToMovieId: number;

  constructor(
    public http: HttpClient,
    public movieDetailService: MovieDetailService,
    public commnetDialogService: CommnetDialogService,
    private authService: AuthService,
    private user: UserService,
  ) {

  }


  rateFilm(target, rate, moviePK, InputUserToMovieID ) {
    console.log(arguments);
    const headers = (this.httpOptions = new HttpHeaders()
      .set('Authorization', `token ${this.authService.getToken()}`)
      .set('Content-Type', 'application/json'));


    this.userAction = {
      movie: moviePK,
      rating: rate,
      user_want_movie: false,
    };
    console.log(`userToMovieId ${InputUserToMovieID}`);
    if (this.userToMovieId === 0) {
      // 평가내역이 없다면 내역을 생성한다.
      this.userAction.user_watched_movie = true;
      console.log(this.userAction, '새로운 객체 생성');

      this.http.post<UserActionResponse>(`${this.apiUrl}/movie/user-checked-movie/create/`, this.userAction, { headers })
        .subscribe(res => {
          this.rating = +res.rating;
          this.want = res.user_want_movie;
          this.watched = res.user_watched_movie;
          this.userToMovieId = res.id;
        });
    } else if (+this.rating === rate) {
      // 평가한 점수 === 클릭한점수면 별을 삭제한다.
      this.userAction.rating = null;
      this.userAction.user_watched_movie = false;
      this.userAction.id = this.userToMovieId;
      this.user.getUsers().subscribe( res => this.userAction.user = res.pk);
      console.log(this.userAction, '삭제실행');

      this.http.put<UserActionResponse>(`${this.apiUrl}/movie/user-checked-movie/${this.userAction.id}/`,
        this.userAction, { headers })
        .subscribe(res => {
          this.userActionResponse = res;
          this.rating = null;
        });
    } else if ( this.userToMovieId !== 0 && +this.rating !== rate ) {
      // 평가한 별점이 존재하는데, 지금 평가한 별점과 다르면 수정한다.
      this.userAction.id = this.userToMovieId;
      this.userAction.user_watched_movie = true;
      this.user.getUsers().subscribe( res => this.userAction.user = res.pk);
      console.log(this.userAction, '수정 실행');

      this.http.put<UserActionResponse>(`${this.apiUrl}/movie/user-checked-movie/${this.userAction.id}/`, this.userAction, { headers })
        .subscribe(res => {
          this.userActionResponse = res;
          this.rating = +res.rating;
        });
    }
  }
  // isWatched() {
  //   this.userChecked.userWatched.map(item => {
  //     if (item.id === this.moviePoster.id) {
  //       this.rating = item.login_user_checked.rating;
  //       this.checkedId = item.login_user_checked.id;
  //     }
  //   });
  // }
  WantMovie(moviePK, InputUserToMovieID, want) {
    console.log('보고싶어요 클릭됨');
    // http클라이언트로 생성 혹은 수정한다.
    const headers = (this.httpOptions = new HttpHeaders()
      .set('Authorization', `token ${this.authService.getToken()}`)
      .set('Content-Type', 'application/json'));
    this.userAction = {
        movie: moviePK,
        rating: null,
        user_watched_movie: false,
    };
    if ( want !== true) {
      if ( Object.keys(this.moviePoster.login_user_checked).length === 1  ) {
        // 생성 api
        this.userAction.user_want_movie = true;
        this.http.put<UserActionResponse>(`${this.apiUrl}/movie/user-checked-movie/create/`, this.userAction, { headers })
        .subscribe(res => {
          this.want = res.user_want_movie;
          this.rating  = null;
          this.userToMovieId = res.id;
        });
      } else {
        // 수정 api
        this.userAction.user_want_movie = true;
        this.userAction.id = InputUserToMovieID;

        this.user.getUsers().subscribe(res => (this.userAction.user = res.pk));
        this.http.put<UserActionResponse>(`${this.apiUrl}/movie/user-checked-movie/${this.userAction.id}/`, this.userAction, { headers })
        .subscribe(res => {
          this.want = res.user_want_movie;
          this.rating  = null;
        });
      }
    } else {
      // 수정 api로 삭제
      this.userAction.user_want_movie = false;
      this.userAction.id = InputUserToMovieID;

      this.user.getUsers().subscribe(res => (this.userAction.user = res.pk));
      this.http.put<UserActionResponse>(`${this.apiUrl}/movie/user-checked-movie/${this.userAction.id}/`, this.userAction, { headers })
      .subscribe(res => {
        this.userActionResponse = res;
      });
    }
  }
  ngOnInit() {
    // console.log(this.userChecked.userWatched, '내가 봤거나 보고싶어요 누른 영화들의 정보');
    // console.log(this.moviePoster , '그려질 영화의 정보');
    const login_user = this.moviePoster.login_user_checked;
    console.log(this.moviePoster);
    this.rating = Object.keys(login_user).length === 1 ? 0 : +login_user.rating;
    this.want = Object.keys(login_user).length === 1 ? false : login_user.user_want_movie;
    this.comment = login_user.comment === '' ? false : login_user.user_watched_movie;
    this.userToMovieId = Object.keys(login_user).length === 1 ? 0 : login_user.id;
  }
}
