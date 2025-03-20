import { trigger, transition, style, animate } from '@angular/animations';
 
export const fadeInOutAnimation = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }), // Component ilk görünürken opaklık 0
    animate('600ms ease-in', style({ opacity: 1 })), // 600ms içinde opaklık 1
  ]),
  transition(':leave', [
    animate('300ms ease-out', style({ opacity: 0 })), // Çıkarken opaklık 0 olur
  ]),
]);