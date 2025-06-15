import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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

  openAppointment(): void {
    window.open('https://tally.so/r/mJxOxR', '_blank');
  }
 }
