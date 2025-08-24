import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LoadingPageComponent } from './features/coming-soon/loading-page/loading-page.component';
import { LoadingMobileComponent } from './features/coming-soon/loading-mobile/loading-mobile.component';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        SharedModule,
        LoadingPageComponent,
        LoadingMobileComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isMobile = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const screenWidth = window.innerWidth;
      this.isMobile = screenWidth < 768;
    }
  }
}
