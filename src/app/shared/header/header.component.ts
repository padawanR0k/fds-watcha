import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
  
import { AuthService } from '../../core/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchString: string;
  resultState = false;
  state = true;
  searchResultList = [
    { movieNm: '인셉션', moviePoster: '/assets/images/user-avatar-100.jpg' },
    { movieNm: '인조인간', moviePoster: '/assets/images/user-avatar-100.jpg' },
    {
      movieNm: '인사이드 아웃',
      moviePoster: '/assets/images/user-avatar-100.jpg'
    }
  ];
  constructor(
    public router: Router,
    private auth: AuthService
  ) {}

  @ViewChild('searchResult1') results: ElementRef;

  @HostListener('window:scroll')
  checkScroll() {
    const componentPosition = document.querySelector('.main-section').getBoundingClientRect().top + window.pageYOffset;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition) {
      this.state = false;
    } else {
      this.state = true;
    }
  }

  moveFocus(event) {
    if (event.target.nodeName === 'INPUT' && event.keyCode === 40) {
      this.results.nativeElement.focus();
    } else if (event.target.nodeName === 'A') {
      event.preventDefault();
      if (event.keyCode === 38) {
        event.target.previousElementSibling.focus();
      } else if (event.keyCode === 40) {
        event.target.nextElementSibling.focus();
      }
    }
  }
  closeResult(event) {
    this.resultState = this.searchString === '' ? false : true;
  }
  ngOnInit() {
    this.searchString = '';
  }

  signout() {
    this.auth.signout()
      // .subscribe(
      //   () => this.router.navigate(['login']),
      //   ({ error }) => {
      //     console.log('ERROR', error.message);
      //   }
      // );
  }
}
