import {  } from '@angular/core';
import { AfterViewInit, Component, Inject, PLATFORM_ID, signal, ChangeDetectionStrategy } from '@angular/core';
import { fadeInOutAnimation } from '../../../shared/animations/animation';
import { isPlatformBrowser } from '@angular/common';
import { EyeBallMobileComponent } from '../eye-ball-mobile/eye-ball-mobile.component';

@Component({
  selector: 'app-loading-mobile',
  standalone: true,
  imports: [EyeBallMobileComponent],
  templateUrl: './loading-mobile.component.html',
  styleUrl: './loading-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOutAnimation],
})
export class LoadingMobileComponent implements AfterViewInit { 
  componentStates = signal({
    componentA: true,
    componentB: false,
  });

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const layer2 = document.getElementById('layer2') as HTMLElement;
      const loadingText = document.getElementById('loading-percent') as HTMLElement;

      if (layer2 && loadingText) {
        const duration = 2000;
        let currentLeft = 0;
        let currentPercentage = 0;
        const targetLeft = 100;
        const targetPercentage = 100;
        const startTime = performance.now();

        const animate = (timestamp: number) => {
          const elapsedTime = timestamp - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          currentLeft = targetLeft * progress;
          currentPercentage = Math.floor(targetPercentage * progress);

          layer2.style.left = `${currentLeft}%`;
          loadingText.textContent = `${currentPercentage} %`;

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else{
            this.componentStates.update((cs) => ({ ...cs, componentA: false, componentB: true }));
          }
        };

        requestAnimationFrame(animate);
      }
    }
  }
}
