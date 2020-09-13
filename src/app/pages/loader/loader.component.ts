import { Component, OnInit } from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private router: Router) {
  }



  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.show = true;
        console.log('aaaaaaa');
      } else if (event instanceof NavigationEnd) {
        this.show = false;
      }
    });
  }
  show = false;
}
