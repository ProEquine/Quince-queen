import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  windowScrolled?: boolean;
  constructor() { }

  ngOnInit(): void {
    // AOS.init();
  }
  scrollToTop() {
    (function smoothscroll() {
  
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
  
    })();
  }
  
}
