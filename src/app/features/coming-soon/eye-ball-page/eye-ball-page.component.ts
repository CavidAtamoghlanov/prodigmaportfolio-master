import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-eye-ball-page',
  standalone: true,
  imports: [],
  templateUrl: './eye-ball-page.component.html',
  styleUrl: './eye-ball-page.component.scss',
})
export class EyeBallPageComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'p' || event.key === 'P') {
      this.changeStyle();
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'p' || event.key === 'P') {
      this.resetStyle();
    }
  }

  changeStyle() {
    const file = this.el.nativeElement.querySelector('.file-icon');
    const video5 = this.el.nativeElement.querySelector('.video5-container');
    const video4 = this.el.nativeElement.querySelector('.video4-container');
    const video3 = this.el.nativeElement.querySelector('.video3-container');
    const video2 = this.el.nativeElement.querySelector('.video2-container');
    const video1 = this.el.nativeElement.querySelector('.video1-container');
    const skotch = this.el.nativeElement.querySelector('.skotch');
    const prodigmaOrg = this.el.nativeElement.querySelector('.prodigma-org-container');
    const prodigmaPin = this.el.nativeElement.querySelector('.prodigma-pin-container');
    const videoPin = this.el.nativeElement.querySelector('.video-pin-container');
    const photoPin = this.el.nativeElement.querySelector('.photo-pin-container');
    const designPin = this.el.nativeElement.querySelector('.design-pin-container');
    const devPin = this.el.nativeElement.querySelector('.dev-pin-container');
    const ductTape = this.el.nativeElement.querySelector('.duct-tape-container');
    const logoPin = this.el.nativeElement.querySelector('.logo-pin-container');
    const pBtn = this.el.nativeElement.querySelector('.p-btn-container');
    const links = this.el.nativeElement.querySelector('.links-container');
    const comingSoon = this.el.nativeElement.querySelector('.coming-soon');
    const where = this.el.nativeElement.querySelector('.where');
    const tape = this.el.nativeElement.querySelector('.tape');
    const coming = this.el.nativeElement.querySelector('.coming');
    const soon = this.el.nativeElement.querySelector('.soon');
    this.renderer.setStyle(file, 'top', '-720px');
    this.renderer.setStyle(file, 'right', '-238px');
    this.renderer.setStyle(file, 'transform', 'rotate(-90deg)');
    this.renderer.setStyle(video5, 'top', '317px');
    this.renderer.setStyle(video5, 'right', '212px');
    this.renderer.setStyle(video5, 'rotate', '18deg');
    this.renderer.setStyle(video4, 'top', '696px');
    this.renderer.setStyle(video4, 'right', '125px');
    this.renderer.setStyle(video4, 'z-index', '6');
    this.renderer.setStyle(video3, 'top', '670px');
    this.renderer.setStyle(video3, 'right', '742px');
    this.renderer.setStyle(video3, 'rotate', '-27deg');
    this.renderer.setStyle(video2, 'top', '490px');
    this.renderer.setStyle(video2, 'right', '1076px');
    this.renderer.setStyle(video2, 'rotate', '-18deg');
    this.renderer.setStyle(video1, 'top', '165px');
    this.renderer.setStyle(video1, 'right', '613px');
    this.renderer.setStyle(skotch, 'top', '7px');
    this.renderer.setStyle(skotch, 'right', '45px');
    this.renderer.setStyle(prodigmaOrg, 'width', '201px');
    this.renderer.setStyle(prodigmaOrg, 'top', '68px');
    this.renderer.setStyle(prodigmaOrg, 'right', '63px');
    this.renderer.setStyle(prodigmaOrg, 'rotate', '30deg');
    this.renderer.setStyle(prodigmaPin, 'top', '483px');
    this.renderer.setStyle(prodigmaPin, 'right', '643px');
    this.renderer.setStyle(prodigmaPin, 'rotate', '-51deg');
    this.renderer.setStyle(videoPin, 'top', '454px');
    this.renderer.setStyle(videoPin, 'right', '1223px');   
    this.renderer.setStyle(photoPin, 'top', '96px');
    this.renderer.setStyle(photoPin, 'right', '590px');
    this.renderer.setStyle(designPin, 'top', '607px');
    this.renderer.setStyle(designPin, 'right', '735px');
    this.renderer.setStyle(designPin, 'rotate', '45deg');
    this.renderer.setStyle(devPin, 'top', '232px');
    this.renderer.setStyle(devPin, 'right', '268px');
    this.renderer.setStyle(devPin, 'rotate', '30deg');
    this.renderer.setStyle(ductTape, 'top', '595px');
    this.renderer.setStyle(ductTape, 'right', '0');
    this.renderer.setStyle(ductTape, 'width', '566px');
    this.renderer.setStyle(logoPin, 'top', '677px');
    this.renderer.setStyle(logoPin, 'right', '281px');
    this.renderer.setStyle(logoPin, 'z-index', '7');
    this.renderer.setStyle(logoPin, 'rotate', '-27deg');
    this.renderer.setStyle(pBtn, 'opacity', '0');
    this.renderer.setStyle(links, 'opacity', '0');
    this.renderer.setStyle(comingSoon, 'top', '53px');
    this.renderer.setStyle(where, 'top', '136px');
    this.renderer.setStyle(where, 'left', '127px');
    this.renderer.setStyle(where, 'font-size', '1rem');
    this.renderer.setStyle(where, 'padding', '0 0.7rem');
    this.renderer.setStyle(tape, 'top', '60px');
    this.renderer.setStyle(tape, 'left', '-33px');
    this.renderer.setStyle(tape, 'width', '423px');
    this.renderer.setStyle(coming, 'font-size', '20rem');
    this.renderer.setStyle(coming, 'line-height', '10rem');
    this.renderer.setStyle(soon, 'font-size', '10rem');
    this.renderer.setStyle(soon, 'line-height', '6rem');
  }

  resetStyle() {
    const file = this.el.nativeElement.querySelector('.file-icon');
    const video5 = this.el.nativeElement.querySelector('.video5-container');
    const video4 = this.el.nativeElement.querySelector('.video4-container');
    const video3 = this.el.nativeElement.querySelector('.video3-container');
    const video2 = this.el.nativeElement.querySelector('.video2-container');
    const video1 = this.el.nativeElement.querySelector('.video1-container');
    const skotch = this.el.nativeElement.querySelector('.skotch');
    const prodigmaOrg = this.el.nativeElement.querySelector('.prodigma-org-container');
    const prodigmaPin = this.el.nativeElement.querySelector('.prodigma-pin-container');
    const videoPin = this.el.nativeElement.querySelector('.video-pin-container');
    const photoPin= this.el.nativeElement.querySelector('.photo-pin-container');
    const designPin = this.el.nativeElement.querySelector('.design-pin-container');
    const devPin = this.el.nativeElement.querySelector('.dev-pin-container');
    const ductTape = this.el.nativeElement.querySelector('.duct-tape-container');
    const logoPin = this.el.nativeElement.querySelector('.logo-pin-container');
    const pBtn = this.el.nativeElement.querySelector('.p-btn-container');
    const links = this.el.nativeElement.querySelector('.links-container');
    const comingSoon = this.el.nativeElement.querySelector('.coming-soon');
    const where = this.el.nativeElement.querySelector('.where');
    const tape = this.el.nativeElement.querySelector('.tape');
    const coming = this.el.nativeElement.querySelector('.coming');
    const soon = this.el.nativeElement.querySelector('.soon');
    this.renderer.setStyle(file, 'top', '60px');
    this.renderer.setStyle(file, 'right', '119px');
    this.renderer.setStyle(file, 'transform', 'rotate(0deg)');
    this.renderer.setStyle(video5, 'top', '338px');
    this.renderer.setStyle(video5, 'right', '125px');
    this.renderer.setStyle(video5, 'rotate', '2deg');
    this.renderer.setStyle(video4, 'top', '242px');
    this.renderer.setStyle(video4, 'right', '207px');
    this.renderer.setStyle(video4, 'z-index', '5');
    this.renderer.setStyle(video3, 'top', '141px');
    this.renderer.setStyle(video3, 'right', '123px');
    this.renderer.setStyle(video3, 'rotate', '2deg');
    this.renderer.setStyle(video2, 'top', '161px');
    this.renderer.setStyle(video2, 'right', '206px');
    this.renderer.setStyle(video2, 'rotate', '4deg');
    this.renderer.setStyle(video1, 'top', '102px');
    this.renderer.setStyle(video1, 'right', '279px');
    this.renderer.setStyle(skotch, 'top', '0px');
    this.renderer.setStyle(skotch, 'right', '68px');
    this.renderer.setStyle(prodigmaOrg, 'width', '164px');
    this.renderer.setStyle(prodigmaOrg, 'top', '625px');
    this.renderer.setStyle(prodigmaOrg, 'right', '368px');
    this.renderer.setStyle(prodigmaOrg, 'rotate', '0deg');
    this.renderer.setStyle(prodigmaPin, 'top', '511px');
    this.renderer.setStyle(prodigmaPin, 'right', '374px');
    this.renderer.setStyle(prodigmaPin, 'rotate', '0deg');
    this.renderer.setStyle(videoPin, 'top', '519px');
    this.renderer.setStyle(videoPin, 'right', '276px');
    this.renderer.setStyle(photoPin, 'top', '509px');
    this.renderer.setStyle(photoPin, 'right', '193px');
    this.renderer.setStyle(designPin, 'top', '511px');
    this.renderer.setStyle(designPin, 'right', '108px');
    this.renderer.setStyle(designPin, 'rotate', '0deg');
    this.renderer.setStyle(devPin, 'top', '566px');
    this.renderer.setStyle(devPin, 'right', '163px');
    this.renderer.setStyle(devPin, 'rotate', '-3deg');
    this.renderer.setStyle(ductTape, 'top', '538px');
    this.renderer.setStyle(ductTape, 'right', '119px');
    this.renderer.setStyle(ductTape, 'width', '226px');
    this.renderer.setStyle(logoPin, 'top', '548px');
    this.renderer.setStyle(logoPin, 'right', '259px');
    this.renderer.setStyle(logoPin, 'z-index', '5');
    this.renderer.setStyle(logoPin, 'rotate', '0deg');
    this.renderer.setStyle(pBtn, 'opacity', '0.7');
    this.renderer.setStyle(links, 'opacity', '0.7');
    this.renderer.setStyle(comingSoon, 'top', '214px');
    this.renderer.setStyle(where, 'top', '334px');
    this.renderer.setStyle(where, 'left', '158px');
    this.renderer.setStyle(where, 'font-size', '1.4rem');
    this.renderer.setStyle(where, 'padding', '0 1.5rem');
    this.renderer.setStyle(tape, 'top', '223px');
    this.renderer.setStyle(tape, 'width', '572px');
    this.renderer.setStyle(tape, 'left', '-49px');
    this.renderer.setStyle(coming, 'font-size', '30rem');
    this.renderer.setStyle(coming, 'line-height', '15rem');
    this.renderer.setStyle(soon, 'font-size', '15rem');
    this.renderer.setStyle(soon, 'line-height', '8rem');
  }

}