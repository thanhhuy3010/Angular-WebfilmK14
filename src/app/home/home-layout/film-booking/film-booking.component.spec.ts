import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmBookingComponent } from './film-booking.component';

describe('FilmBookingComponent', () => {
  let component: FilmBookingComponent;
  let fixture: ComponentFixture<FilmBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
