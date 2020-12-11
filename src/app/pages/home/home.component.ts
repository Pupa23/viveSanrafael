import { Component, OnInit } from '@angular/core';
import {ColorHeaderService} from '../../color-header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private colorHeader: ColorHeaderService) { }

  ngOnInit() {
  }

  prevSlide() {
    this.colorHeader.prevSlider();
  }

  nextSlide() {
    this.colorHeader.nextSlider();
  }
}
