import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-eye-ball-mobile',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './eye-ball-mobile.component.html',
  styleUrl: './eye-ball-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyeBallMobileComponent {
  private touchStartX = 0;
  private touchStartY = 0;
  private touchEndX = 0;
  private touchEndY = 0;

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
    this.touchStartY = event.changedTouches[0].screenY;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    console.log("event", event);
    console.log("changed Touches", event.changedTouches);
    this.touchEndX = event.changedTouches[0].screenX;
    this.touchEndY = event.changedTouches[0].screenY;
    this.handleSwipe();
  }

  private handleSwipe() {
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY - this.touchStartY;

    console.log("X", deltaX);
    console.log("Y", deltaY);
    if ((deltaX > 50) && (deltaY < -50)) {
      console.log("YOU SWAPED RIGHT TOP!");
    }
  }

  openAppointment(): void {
    window.open('https://tally.so/r/mJxOxR', '_blank');
  }
 }
