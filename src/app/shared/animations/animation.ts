import { trigger, transition, style, animate } from '@angular/animations';
 
export const fadeInOutAnimation = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 1 }), // Component ilk görünürken opaklık 1
    animate('600ms ease-in', style({ opacity: 1 })), // 600ms içinde opaklık 1
  ]),
  transition(':leave', [
    animate('300ms ease-out', style({ opacity: 1 })), // Çıkarken opaklık 1 olur
  ]),
]);