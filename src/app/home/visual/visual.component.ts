import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent implements OnInit {
  sliderDirect = 'right';
  currentNum = 0;
  isAni = false;
  autoPlay = null;
  interval = null;

  constructor() { }

  ngOnInit() {
    let sliderItem = document.querySelectorAll('.main-slider .body li');
    const arrowBtn = document.querySelector('.main-slider .arrow');
    const dotBtn = document.querySelector('.main-slider .each');

    let _sliderItem = [].slice.call(sliderItem);

    const mainSlider = () => {
      let OPACITY = 0;
      let sliderDot = document.querySelectorAll('.main-slider .each span');
      let _sliderDot = [].slice.call(sliderDot);
      _sliderDot.forEach(item => item.classList.remove('current'));
      _sliderDot[this.currentNum].classList.add('current');

      const frame = () => {
        if (Math.floor(OPACITY) === 1) {
          clearInterval(this.interval);
          _sliderItem.forEach(item => {
            item.classList.remove('active');
            item.style.zIndex = null;
            item.style.opacity = null;
          });
          _sliderItem[this.currentNum].classList.add('active');
          _sliderItem[this.currentNum].style.zIndex = '2';
          this.isAni = false;
        } else {
          OPACITY += 0.01;
          _sliderItem[this.currentNum].style.opacity = OPACITY;
          _sliderItem[this.currentNum].style.zIndex = '4';
        }
      };
      this.interval = setInterval(frame, 2.5);
    };

    const currentMovieNumberInit = state => {
      if (this.isAni) return;
      this.isAni = true;
      if (state === 'right') {
        if (this.currentNum === _sliderItem.length - 1) {
          this.currentNum = 0;
        } else {
          this.currentNum += 1;
        }
      } else if (state === 'left') {
        if (this.currentNum === 0) {
          this.currentNum = _sliderItem.length - 1;
        } else {
          this.currentNum -= 1;
        }
      } else {
        this.currentNum = state;
      }
      mainSlider();
    };

    const autoFn = () => {
      this.autoPlay = setInterval(() => {
        currentMovieNumberInit('right');
      }, 4000);
    };

    const getDots = () => {
      let html = '';
      let current = '';
      for (let i = 0; i < _sliderItem.length; i++) {
        if (i === 0) {
          current = ' class="current"';
        } else {
          current = '';
        }
        html += `<span data-id="${i}"${current}>${i + 1}</span>`;
      }
      dotBtn.innerHTML = html;
      autoFn();
    };

    getDots();

    // arrowBtn.addEventListener('click', e => {
    //   if (e.target.nodeName !== 'I') return;
    //   if (e.target.className === 'icon-left-open-big') {
    //     this.sliderDirect = 'left';
    //   } else if (e.target.className === 'icon-right-open-big') {
    //     this.sliderDirect = 'right';
    //   }
    //   currentMovieNumberInit(this.sliderDirect);
    //   clearInterval(this.autoPlay);
    // });

    // dotBtn.addEventListener('click', e => {
    //   if (this.currentNum === +e.target.dataset.id || e.target.nodeName !== 'SPAN') return;
    //   currentMovieNumberInit(+e.target.dataset.id);
    //   clearInterval(this.autoPlay);
    // });
  }
}
