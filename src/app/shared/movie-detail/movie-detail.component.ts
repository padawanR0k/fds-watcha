import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

import { MovieDetailService } from '../../core/movie-detail.service';
import { MovieDetailDialogService } from '../../core/movie-detail-dialog.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  sliderDirect = 'right';
  movieDetail: Element;
  stillCut: HTMLElement;
  sliderItem;
  isAni = false;
  moveRange = 0;
  currentNum = 0;
  interval = null;
  autoPlay = null;
  timer = 3000;
  OPACITY: number;

  constructor(
    public movieDetailService: MovieDetailService,
    private el: ElementRef,
    private renderer: Renderer2,
    public movieDetailDialogService: MovieDetailDialogService
  ) { }

  ngOnInit() {
    this.movieDetail = document.querySelector('.movie-detail');

    this.sliderItem = document.querySelectorAll('.still-cut ul li');
    this.sliderItem = [].slice.call(this.sliderItem);

    this.renderer.setStyle(this.movieDetail, 'top', `${window.scrollY}px`);

    this.autoFn();
  }

  frame = () => {
    if (Math.floor(this.OPACITY) === 1) {
      clearInterval(this.interval);
      this.sliderItem.forEach(item => {
        item.classList.remove('active');
        item.style.zIndex = null;
        item.style.opacity = null;
      });
      this.sliderItem[this.currentNum].classList.add('active');
      this.sliderItem[this.currentNum].style.zIndex = '2';
      this.isAni = false;
    } else {
      this.OPACITY += 0.01;
      this.sliderItem[this.currentNum].style.opacity = this.OPACITY;
      this.sliderItem[this.currentNum].style.zIndex = '4';
    }
  }

  mainSlider() {
    this.OPACITY = 0;

    this.interval = setInterval(this.frame, 2.5);
  };

  currentMovieNumberInit(direct) {
    if (this.isAni) return;
    this.isAni = true;
    if (direct === 'right') {
      if (this.currentNum === this.sliderItem.length - 1) {
        this.currentNum = 0;
      } else {
        this.currentNum += 1;
      }
    } else if (direct === 'left') {
      if (this.currentNum === 0) {
        this.currentNum = this.sliderItem.length - 1;
      } else {
        this.currentNum -= 1;
      }
    } else {
      this.currentNum = direct;
    }
    this.mainSlider();
  }

  autoFn() {
    this.autoPlay = setInterval(() => {
      this.currentMovieNumberInit('right');
    }, this.timer);
  }

  nextMovie(direct: string) {
    this.sliderDirect = direct;

    this.currentMovieNumberInit(this.sliderDirect);
    clearInterval(this.autoPlay);
    this.autoFn();
  }

  // openDialog() {
  //   this.staffDetail.openDialog();
  // }
}
