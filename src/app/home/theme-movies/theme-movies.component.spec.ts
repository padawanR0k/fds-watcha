import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeMoviesComponent } from './theme-movies.component';

describe('ThemeMoviesComponent', () => {
  let component: ThemeMoviesComponent;
  let fixture: ComponentFixture<ThemeMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
