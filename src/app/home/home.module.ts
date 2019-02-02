import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomePageComponent } from './home-layout/home-page/home-page.component';
import { FilmDetailComponent } from './home-layout/film-detail/film-detail.component';
import { FilmBookingComponent } from './home-layout/film-booking/film-booking.component';

@NgModule({
  declarations: [HomeLayoutComponent, HomePageComponent, FilmDetailComponent, FilmBookingComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeLayoutComponent,HomePageComponent
  ]
})
export class HomeModule { }
