import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomePageComponent } from './home-layout/home-page/home-page.component';
import { FilmDetailComponent } from './home-layout/film-detail/film-detail.component';
import { FilmBookingComponent } from './home-layout/film-booking/film-booking.component';
import { SliderComponent } from './home-layout/slider/slider.component';
import { NavbarComponent } from './home-layout/navbar/navbar.component';
import { QuickBookingComponent } from './home-layout/quick-booking/quick-booking.component';
import { FormsModule } from '@angular/forms';
import { MovieTypeComponent } from './home-layout/movie-type/movie-type.component';
import { MoviePlayingComponent } from './home-layout/movie-playing/movie-playing.component';
import { MovieComingsoonComponent } from './home-layout/movie-comingsoon/movie-comingsoon.component';
import { ItemMovieComponent } from './home-layout/item-movie/item-movie.component';

import { SwiperModule } from 'angular2-useful-swiper';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from "../_core/share/Module/material/material.module";

@NgModule({
  declarations: [HomeLayoutComponent, HomePageComponent, FilmDetailComponent, FilmBookingComponent,  SliderComponent, NavbarComponent, QuickBookingComponent, MovieTypeComponent, MoviePlayingComponent, MovieComingsoonComponent, ItemMovieComponent],
  imports: [
    CommonModule,FormsModule,SwiperModule
  ],
  exports: [
    HomeLayoutComponent,HomePageComponent
  ]
})
export class HomeModule { }
