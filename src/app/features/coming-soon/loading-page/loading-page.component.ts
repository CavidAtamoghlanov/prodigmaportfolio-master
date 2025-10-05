import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild, signal } from '@angular/core';
import { EyeBallPageComponent } from '../eye-ball-page/eye-ball-page.component';
import { fadeInOutAnimation } from '../../../shared/animations/animation';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-loading-page',
  standalone: true,
  imports: [EyeBallPageComponent],
  templateUrl: './loading-page.component.html',
  styleUrl: './loading-page.component.scss',
  animations: [fadeInOutAnimation],
})
export class LoadingPageComponent implements AfterViewInit {
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

    // wait 2 frames to ensure DOM children are painted
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (this.layer2Ref && this.loadingPercentRef && !this.animationStarted) {
          this.animationStarted = true;
          this.startAnimation(this.layer2Ref.nativeElement, this.loadingPercentRef.nativeElement);
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
        // switch components only after animation completes
        this.componentStates.update(cs => ({ ...cs, componentA: false, componentB: true }));
      }
    };

    requestAnimationFrame(animate);
  }

}