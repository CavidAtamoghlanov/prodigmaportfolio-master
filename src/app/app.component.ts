import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

import { SharedModule } from './shared/shared.module';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        RouterOutlet,
        SharedModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ProdigmaPorfolio';
  footerUrl = 'https://www.ganatan.com';
  footerLink = 'www.ganatan.com';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const navMain = this.document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove("show");
          }
        }
      }
    }

  }

}

