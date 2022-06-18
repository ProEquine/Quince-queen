import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { AppInsightsService } from './services/app-insights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  windowScrolled?: boolean;

  constructor(@Inject(DOCUMENT) private document: Document , appInsightsService: AppInsightsService) {
    appInsightsService.logPageView('MainPage');
  }

/*                              back-to-top start                             */
/* -------------------------------------------------------------------------- */
// @HostListener("window:scroll", [])
// onWindowScroll() {
//   if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
//     this.windowScrolled = true;
//   }
//   else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
//     this.windowScrolled = false;
//   }
// }



}
