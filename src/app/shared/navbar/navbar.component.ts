import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = false;
  public navbarCollapsed = true;
  langStart='ar';
  /* UI */
  hasScrolledBanner = false;
  constructor(private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private viewportScroller: ViewportScroller
  ) {
    translateService.addLangs(['ar', 'en']);
    translateService.setDefaultLang('en');
    // this.langStart = translateService.setDefaultLang('ar');
  }
  changeLangage(lang: string) {
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.changeCssFile(lang);
    this.navbarCollapsed = true;

  }
  changeCssFile(lang: string) {
    let headTag = this.document.getElementsByTagName("head")[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById("langCss") as HTMLLinkElement;
    let bundleName = lang === "ar" ? "styles.rtl.scss" : "styles.scss";
    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      let newLink = this.document.createElement("link");
      newLink.rel = "stylesheet";
      newLink.type = "text/scss";
      newLink.id = "langCss";
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }

  ngOnInit(): void {
    // this.changeLangage(this.langStart);
  }
  /**
   * Listens to window scroll events
   *
   * @param {*} event
   * @memberof HeaderComponent
   */
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.pageYOffset > 130) this.hasScrolledBanner = true;
    else this.hasScrolledBanner = false;
  }

  scrollToElement(element: any): void {
    element.scrollIntoView({ behavior: "smooth", inline: "nearest" });
  }
  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    this.navbarCollapsed = true;
  }

}
