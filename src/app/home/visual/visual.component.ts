import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent implements OnInit {
  sliderDirect = 'right';
  activeNum = 0;
  currentNum: number;
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

  mainSlider() {
    this.sliderDot = document.querySelectorAll('.main-slider .each span');
    this.sliderDot = [].slice.call(this.sliderDot);
    this.sliderDot.forEach(item => item.classList.remove('current'));
    this.sliderDot[this.activeNum].classList.add('current');

    this.sliderItem.forEach(item => {
      item.classList.remove('current');
      item.classList.remove('active');
    });
    this.sliderItem[this.currentNum].classList.add('current');
    this.sliderItem[this.activeNum].classList.add('active');
  };

  currentMovieNumberInit (direct) {
    this.currentNum = this.activeNum;
    if (direct === 'right') {
      this.activeNum += 1;
      if (this.activeNum === this.sliderItem.length) {
        this.activeNum = 0;
      }
    } else if (direct === 'left') {
      this.activeNum -= 1;
      if (this.activeNum < 0) {
        this.activeNum = this.sliderItem.length - 1;
      }
    } else {
      this.activeNum = direct;
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
