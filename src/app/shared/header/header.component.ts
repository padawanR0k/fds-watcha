import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { AuthService } from '../../core/auth/services/auth.service';
import { UserService } from '../../core/auth/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  message: string;
  searchString: string;
  resultState = false;
  state = true;
  searchResultList = [
    { movieNm: '인셉션', moviePoster: '/assets/images/user-avatar-100.jpg' },
    { movieNm: '인조인간', moviePoster: '/assets/images/user-avatar-100.jpg' },
    { movieNm: '인사이드 아웃', moviePoster: '/assets/images/user-avatar-100.jpg' }
  ];
  userInfo;

  constructor(
    public router: Router,
    private auth: AuthService,
    private user: UserService,
    public dialog: MatDialog
  ) { }

  @ViewChild('searchResult1') results: ElementRef;

  @HostListener('window:scroll')
  checkScroll() {
    if (!document.querySelector('.main-section')) return;
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

    this.userInfo = this.user.getUsers()
      .subscribe(
        () => { },
        ({ error }) => {
          console.log('ERROR', error.message);
          this.message = error.message;
        }
      );
  }

  signout() {
    this.auth.signout();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalEditProfile, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('[CLOSE]');
      // console.log(`Dialog result: ${result}`);
      this.auth.userEdit(result)
        .subscribe(
          () => {},
          ({ error }) => {
            console.log('ERROR', error.message);
            this.message = error.message;
          }
        );
    });
  }
}

@Component({
  selector: 'modal-edit-profile',
  templateUrl: 'modal-edit-profile.html',
  styleUrls: ['./modal-edit-profile.scss']
})

export class ModalEditProfile {
  userForm: FormGroup;
  message: string;
  imgSrc: string;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      nickname: new FormControl('', [
        Validators.required
      ])
    });
  }

  photoChange(src) {
    // src = URL.createObjectURL(src);
    this.auth.photoChange(src)
      .subscribe(
        () => {},
        ({ error }) => {
          console.log('ERROR', error.message);
          this.message = error.message;
        }
      );
  }

  userEdit() {
    this.auth.userEdit(this.userForm.value)
      .subscribe(
        () => {},
        ({ error }) => {
          console.log('ERROR', error.message);
          this.message = error.message;
        }
      );
  }

  get nickname() {
    return this.userForm.get('nickname');
  }
}
