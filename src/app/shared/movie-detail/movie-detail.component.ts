import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { MovieDetailService } from '../../core/movie-detail.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie;
  sliderDirect = 'right';
  movieDetail: Element;
  stillCuts = [];
  activeNum = 0;
  currentNum: number;
  interval = null;
  autoPlay = null;
  timer = 4000;
  OPACITY: number;

  constructor(
    public movieDetailService: MovieDetailService,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.movie = {
      id: 100,
      cuts: {
        0: 'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_720,q_80,w_1280/v1521319925/jsgkobx3lahyetw45yhl.jpg',
        1: 'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_720,q_80,w_1280/v1521693623/ugbgvz82u8mxk8h7umsb.jpg',
        2: 'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_720,q_80,w_1280/v1521692948/jqxqt7wqkqxskl15oim6.jpg'
      },
      poster: 'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1521689621/i3utanr7qh41xtggl2mu.jpg',
      star: '3.0',
      ticket: '26.70',
      watcher: 78509,
      title: '어벤져스'
    };
    for (let i = 0; i < Object.keys(this.movie.cuts).length; i++) {
      this.stillCuts.push(this.movie.cuts[i]);
    }

    this.movieDetail = document.querySelector('.movie-detail');
    this.renderer.setStyle(this.movieDetail, 'top', `${window.scrollY}px`);

    this.autoFn();
  }

  getTransition(i) {
    if (i === this.currentNum) {
      return 'opacity .8s'
    } else {
      return null;
    }
  }

  getOpacity(i) {
    if (i === this.currentNum) {
      return 0
    } else if (i === this.activeNum) {
      return 1;
    } else {
      return null;
    }
  }

  getZIndex(i) {
    if (i === this.currentNum) {
      return 3
    } else if (i === this.activeNum) {
      return 2;
    } else {
      return null;
    }
  }

  currentMovieNumberInit(direction) {
    this.currentNum = this.activeNum;
    if (direction === 'right') {
      if (this.activeNum === Object.keys(this.movie.cuts).length - 1) {
        this.activeNum = 0;
      } else {
        this.activeNum += 1;
      }
    } else if (direction === 'left') {
      if (this.activeNum === 0) {
        this.activeNum = Object.keys(this.movie.cuts).length - 1;
      } else {
        this.activeNum -= 1;
      }
    } else {
      this.activeNum = direction;
    }
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
}
