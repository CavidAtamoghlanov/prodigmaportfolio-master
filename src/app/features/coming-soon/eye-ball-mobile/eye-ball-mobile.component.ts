import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, QueryList, ViewChildren  } from '@angular/core';

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
export class EyeBallMobileComponent implements AfterViewInit {
  @ViewChildren('videoContainer', { read: ElementRef }) videoContainers!: QueryList<ElementRef<HTMLDivElement>>;
  topVideoRef!: ElementRef<HTMLDivElement>;

  startX = 0;
  startY = 0;
  isDragging = false;
  zIndexOrder = [1, 2, 3, 4, 5]; // video5-container: z-index 1, video4-container: z-index 2, ..., video1-container: z-index 5
  rotateAngles = [-15, 30, -30, 15, 0]; // z-index 1: -15deg, z-index 2: 30deg, z-index 3: -30deg, z-index 4: 15deg, z-index 5: 0deg

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateTopVideoRef();
      this.cdr.detectChanges();
    }, 0);

    this.videoContainers.changes.subscribe(() => {
      this.updateTopVideoRef();
      this.cdr.detectChanges();
    });
  }

  updateTopVideoRef() {
    const containers = this.videoContainers.toArray();
    const indexOfTop = this.zIndexOrder.indexOf(5);

    if (containers[indexOfTop]) {
      this.topVideoRef = containers[indexOfTop];
      console.log('Updated top container:', this.topVideoRef.nativeElement.className, 'z-index:', this.zIndexOrder[indexOfTop]);
    } else {
      console.error('Top container not found for z-index 5. Containers:', containers.map(elem => elem.nativeElement.className));
    }
    this.cdr.detectChanges();
  }

  getRotateAngle(zIndex: number): string {
    const index = this.zIndexOrder.indexOf(zIndex);
    if (index === -1) return '0deg';

    return `${this.rotateAngles[index]}deg`;
  }

  rotateVideos(): void {
    const first = this.zIndexOrder.shift(); // Ən üst elementi al
    if (first !== undefined) {
      this.zIndexOrder.push(first); // Ən üst elementi sona əlavə et
    }
    console.log('New zIndexOrder:', this.zIndexOrder);
    this.cdr.detectChanges();
    setTimeout(() => {
      this.updateTopVideoRef();
    }, 0);
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.updateTopVideoRef();
    if (!this.topVideoRef) {
      console.error('topVideoRef is not set on touchstart');

      return;
    }
    console.log('Touch started on:', this.topVideoRef.nativeElement.className);
    this.startX = event.touches[0].clientX;
    this.startY = event.touches[0].clientY;
    this.isDragging = true;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (!this.isDragging || !this.topVideoRef) return;

    const touch = event.touches[0];
    const deltaX = touch.clientX - this.startX;
    const deltaY = touch.clientY - this.startY;

    const container = this.topVideoRef.nativeElement;
    container.style.transition = 'none';
    container.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px)) rotate(5deg)`;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    if (!this.topVideoRef) return;

    this.isDragging = false;

    const container = this.topVideoRef.nativeElement;
    const deltaX = event.changedTouches[0].clientX - this.startX;

    if (Math.abs(deltaX) > 80) {
      // Swipe şərtini ödəyirsə, ən arxaya keçid effekti
      container.style.transition = 'transform 0.4s ease, opacity 0.4s ease, z-index 0.4s ease';
      container.style.transform = `translate(-50%, -50%) rotate(${this.getRotateAngle(1)}) scale(0.8)`; // Ən aşağı z-index-in bucağı və kiçilmə effekti
      container.style.opacity = '0.7'; // Şəffaflıq effekti
      container.style.zIndex = '1'; // Müvəqqəti olaraq ən aşağı z-index

      setTimeout(() => {
        // Animasiya bitdikdən sonra zIndexOrder-i yenilə
        this.rotateVideos();
        // Effekti sıfırla
        container.style.transition = 'transform 0.4s ease';
        container.style.transform = `translate(-50%, -50%) rotate(${this.getRotateAngle(this.zIndexOrder[this.videoContainers.toArray().findIndex(elem => elem.nativeElement === container)])})`;
        container.style.opacity = '1';
        container.style.zIndex = this.zIndexOrder[this.videoContainers.toArray().findIndex(elem => elem.nativeElement === container)].toString();
      }, 400);
    } else {
      // Swipe şərtini ödəmirsə, orijinal vəziyyətə qayıt
      container.style.transition = 'transform 0.4s ease';
      container.style.transform = `translate(-50%, -50%) rotate(${this.getRotateAngle(5)})`;
    }
  }

  openAppointment(): void {
    window.open('https://tally.so/r/mJxOxR', '_blank');
  }
 }
