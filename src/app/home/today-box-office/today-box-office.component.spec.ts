import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayBoxOfficeComponent } from './today-box-office.component';

describe('TodayBoxOfficeComponent', () => {
  let component: TodayBoxOfficeComponent;
  let fixture: ComponentFixture<TodayBoxOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayBoxOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayBoxOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
