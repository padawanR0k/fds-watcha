import { Component, OnInit } from '@angular/core';
import { BoxOfficePagenationService } from '../home/box-office-pagenation.service';

@Component({
  selector: 'app-boxoffice',
  templateUrl: './boxoffice.component.html',
  styleUrls: ['./boxoffice.component.scss']
})
export class BoxofficeComponent implements OnInit {

  constructor(public boxOfficePage: BoxOfficePagenationService) { }

  ngOnInit() {
    this.boxOfficePage.loadTopFive();
  }

}
