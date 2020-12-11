import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorHeaderService {
  private color0: string = '#dafdfe';
  private color1: string = '#faddee';
  private color2: string = '#fff9ce';
  private slide = 0;
  constructor() { }
  getColor() {
    if(this.slide === 0) {
      return this.color0;
    }
    if(this.slide === 1) {
      return this.color1;
    }
    if(this.slide === 2) {
      return this.color2;
    }
  }

  prevSlider() {
    if(this.slide === 0) {
      return;
    }
    this.slide = this.slide - 1;
  }
  nextSlider() {
    if(this.slide === 2) {
      return;
    }
    this.slide = this.slide + 1;
  }
}
