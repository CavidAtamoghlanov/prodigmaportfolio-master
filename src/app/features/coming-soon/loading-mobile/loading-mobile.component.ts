import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild, signal, ChangeDetectionStrategy } from '@angular/core';
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
  @ViewChild('layer2') layer2Ref!: ElementRef<HTMLElement>;
  @ViewChild('loadingPercent') loadingPercentRef!: ElementRef<HTMLElement>;

  componentStates = signal({
    componentA: true,
    componentB: false,
  });

  private animationStarted = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    // ✅ Wait 2 frames to ensure DOM children are painted
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const layer2 = this.layer2Ref?.nativeElement;
        const loadingText = this.loadingPercentRef?.nativeElement;

        if (layer2 && loadingText && !this.animationStarted) {
          this.animationStarted = true;
          this.startAnimation(layer2, loadingText);
        }
      });
    });
  }

  private startAnimation(layer2: HTMLElement, loadingText: HTMLElement) {
    const duration = 2000;
    const targetLeft = 100;
    const targetPercentage = 100;
    const startTime = performance.now();

    const animate = (timestamp: number) => {
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const currentLeft = targetLeft * progress;
      const currentPercentage = Math.floor(targetPercentage * progress);

      layer2.style.transform = `translateX(${currentLeft}%)`;
      loadingText.textContent = `${currentPercentage}%`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // ✅ Only switch components after animation completes
        this.componentStates.update(cs => ({ ...cs, componentA: false, componentB: true }));
      }
    };

    requestAnimationFrame(animate);
  }

}
