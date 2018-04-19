import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../core/auth/services/auth.service';
@Component({
  selector: 'app-evalmore',
  templateUrl: './evalmore.component.html',
  styleUrls: ['./evalmore.component.scss']
})
export class EvalmoreComponent implements OnInit {
  watchedCount: number;
  countBarPercent: number;

  movieListLength = 24;
  appUrl = environment.apiUrl;
  private UserPk: number;

  constructor(public http: HttpClient, private authService: AuthService) {
    // httpHeader = {'headers': { 'Authorization' : `token ${this.authService.getToken()}`} };
    const headers = new HttpHeaders()
    .set('Authorization', `token ${this.authService.getToken()}`);

    this.http.get<any>(`${this.appUrl}/members/detail/`, { headers })
      .subscribe( user => {
        console.log(user)
        // this.http.get<any>(`${this.appUrl}/members/${user.pk}/watched-movie/`, this.httpHeader)
        // .subscribe( res => {
        //   this.watchedCount = res.count;
        //   // this.watchedCount = 450; // 추후에 변경해야함
        // });
      }
    );
  }
  addCount() {
    // watchedCount는 user의 res.count를 참조한다.
    // 평가가 될떄, 취소될때 마다 바뀌어야함
    // 자식으로부터 평가하는 이벤트를 캐치해서, 그 이벤트가 발생할때마다 특정 함수를 실행시킨다 = >user의 count를 가져온다.
    this.watchedCount += 1;
    if (this.watchedCount > 0 && this.watchedCount <= 100 ) {
      this.countBarPercent = this.watchedCount / 100;
    } else if (this.watchedCount > 100 && this.watchedCount <= 500) {
      this.countBarPercent = this.watchedCount / 500;
    } else if (this.watchedCount > 500 && this.watchedCount <= 1000) {
      this.countBarPercent = this.watchedCount / 1000;
    } else if (this.watchedCount > 1000 && this.watchedCount <= 10000) {
      this.countBarPercent = this.watchedCount / 10000;
    }
  }
  ngOnInit() {
  }
}
