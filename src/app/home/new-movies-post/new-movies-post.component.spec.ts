import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMoviesPostComponent } from './new-movies-post.component';

describe('NewMoviesPostComponent', () => {
  let component: NewMoviesPostComponent;
  let fixture: ComponentFixture<NewMoviesPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMoviesPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMoviesPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
