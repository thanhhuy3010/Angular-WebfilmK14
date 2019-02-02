import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomePageComponent } from './home-layout/home-page/home-page.component';

@NgModule({
  declarations: [HomeLayoutComponent, HomePageComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeLayoutComponent,HomePageComponent
  ]
})
export class HomeModule { }
