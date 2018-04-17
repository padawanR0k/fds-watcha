import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent implements OnInit {
  sliderDirect = 'right';
  currentNum = 0;
  timer = 4000;
  isAni = false;
  autoPlay = null;
  interval = null;
  sliderItem;
  sliderDot;
  btnArrow;
  btnDot;
  OPACITY: number;

  constructor() { }

  ngOnInit() {
    this.sliderItem = document.querySelectorAll('.main-slider .body li');
    this.sliderItem = [].slice.call(this.sliderItem);
    this.btnArrow = document.querySelector('.main-slider .arrow');
    this.btnDot = document.querySelector('.main-slider .each');

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
  };

  mainSlider() {
    this.OPACITY = 0;
    this.sliderDot = document.querySelectorAll('.main-slider .each span');
    this.sliderDot = [].slice.call(this.sliderDot);
    this.sliderDot.forEach(item => item.classList.remove('current'));
    this.sliderDot[this.currentNum].classList.add('current');

    this.interval = setInterval(this.frame, 2.5);
  };

  currentMovieNumberInit (direct) {
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
  };

  autoFn() {
    this.autoPlay = setInterval(() => {
      this.currentMovieNumberInit('right');
    }, this.timer);
  };

  nextMovie(direct: string) {
    this.sliderDirect = direct;
    
    this.currentMovieNumberInit(this.sliderDirect);
    clearInterval(this.autoPlay);
    this.autoFn();
  }

  selectMovie(target: number) {
    this.currentMovieNumberInit(target);
    clearInterval(this.autoPlay);
    this.autoFn();
  }
}
