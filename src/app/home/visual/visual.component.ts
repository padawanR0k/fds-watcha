import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //   let currentNum = 0;
  //   let sliderDirect = 'right';
  //   let isAni = false;
  //   let sliderItem = document.querySelectorAll('.main-slider .body li');
  //   const arrowBtn = document.querySelector('.main-slider .arrow');
  //   const dotBtn = document.querySelector('.main-slider .each');
  //   let autoPlay = null;
  //   let interval = null;

  //   sliderItem = [].slice.call(sliderItem);

  //   const mainSlider = () => {
  //     let OPACITY = 0;
  //     let sliderDot = document.querySelectorAll('.main-slider .each span');
  //     sliderDot = [].slice.call(sliderDot);
  //     sliderDot.forEach(item => item.classList.remove('current'));
  //     sliderDot[currentNum].classList.add('current');

  //     const frame = () => {
  //       if (Math.floor(OPACITY) === 1) {
  //         clearInterval(interval);
  //         sliderItem.forEach(item => {
  //           item.classList.remove('active');
  //           item.style.zIndex = null;
  //           item.style.opacity = null;
  //         });
  //         sliderItem[currentNum].classList.add('active');
  //         sliderItem[currentNum].style.zIndex = '2';
  //         isAni = false;
  //       } else {
  //         OPACITY += 0.01;
  //         sliderItem[currentNum].style.opacity = OPACITY;
  //         sliderItem[currentNum].style.zIndex = '4';
  //       }
  //     };
  //     interval = setInterval(frame, 2.5);
  //   };

  //   const currentMovieNumberInit = state => {
  //     if (isAni) return;
  //     isAni = true;
  //     if (state === 'right') {
  //       if (currentNum === sliderItem.length - 1) {
  //         currentNum = 0;
  //       } else {
  //         currentNum += 1;
  //       }
  //     } else if (state === 'left') {
  //       if (currentNum === 0) {
  //         currentNum = sliderItem.length - 1;
  //       } else {
  //         currentNum -= 1;
  //       }
  //     } else {
  //       currentNum = state;
  //     }
  //     mainSlider();
  //   };

  //   const autoFn = () => {
  //     autoPlay = setInterval(() => {
  //       currentMovieNumberInit('right');
  //     }, 4000);
  //   };

  //   const getDots = () => {
  //     let html = '';
  //     let current = '';
  //     for (let i = 0; i < sliderItem.length; i++) {
  //       if (i === 0) {
  //         current = ' class="current"';
  //       } else {
  //         current = '';
  //       }
  //       html += `<span data-id="${i}"${current}>${i + 1}</span>`;
  //     }
  //     dotBtn.innerHTML = html;
  //     autoFn();
  //   };

  //   window.addEventListener('load', getDots);

  //   arrowBtn.addEventListener('click', e => {
  //     if (e.target.nodeName !== 'I') return;
  //     if (e.target.className === 'icon-left-open-big') {
  //       sliderDirect = 'left';
  //     } else if (e.target.className === 'icon-right-open-big') {
  //       sliderDirect = 'right';
  //     }
  //     currentMovieNumberInit(sliderDirect);
  //     clearInterval(autoPlay);
  //   });

  //   dotBtn.addEventListener('click', e => {
  //     if (currentNum === +e.target.dataset.id || e.target.nodeName !== 'SPAN') return;
  //     currentMovieNumberInit(+e.target.dataset.id);
  //     clearInterval(autoPlay);
  //   });
  }
}
