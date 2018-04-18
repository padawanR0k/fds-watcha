import { Component, OnInit } from '@angular/core';

import { AgWordCloudData, AgWordCloudModule } from 'angular4-word-cloud';

@Component({
  selector: 'app-user-taste',
  templateUrl: './user-taste.component.html',
  styleUrls: ['./user-taste.component.scss']
})
export class UserTasteComponent implements OnInit {

  // nation
  public doughnutChartLabels: string[] = ['SF', '판타지', '스릴러'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';
  public doughnutChartOptions: any = {
    responsive: true,
    legend: {display: false},
    cutoutPercentage: 70, // 굵기
    elements: { arc: { borderWidth: 0 } }, // 외곽선
  };
  private doughnutChartColors: any[] = [{backgroundColor: ['#ffc2c2', '#fa6a69', '#fb9b9b']}];


  // rating-graph
  public lineChartData: Array<any> = [
    { data: [0, 10, 20, 30, 20, 40, 60, 70, 40, 20, 40, 0], label: '내 별점' }
  ];
  public lineChartLabels: Array<any> = [ null, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, null];
  public lineChartOptions: any = {
    responsive: true,
    devicePixelRatio: 4,
    scales: {
      xAxes: [{ gridLines: { display: false }, display: false }], // 그리드삭제
      yAxes: [{ gridLines: { display: false }, display: false }] // 그리드삭제
    },
    legend: { display: false },
    elements: { point: { radius: 0 } }
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: '#FFEB3B', // 배경색
      borderColor: 'rgba(0,0,0, 0)', // 외곽선 색
      borderWidth: 0, // 외곽선
      lineTension: 0.01 // 그래프 곡선률
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';


  // word cloud
  wordData: Array<AgWordCloudData> = [
    {size: this.randomSize(), text: '스릴있는'},
    {size: this.randomSize(), text: '공포'},
    {size: this.randomSize(), text: '미래배경'},
    {size: this.randomSize(), text: '2인조'},
    {size: this.randomSize(), text: '히어로'},
    {size: this.randomSize(), text: '마블'},
  ];
  // Word Cloud Options
  WordCloudOptions = {
    settings: {
      minFontSize: 50,
      maxFontSize: 100,
    },
    margin: {
      top: 10,
      bottom: 10,
    },
    width: 460,
    labels: false
  };
  randomSize() {
    return Math.floor(Math.random() * 20) + 15;
  }
  constructor() {}

  ngOnInit() {}
}
