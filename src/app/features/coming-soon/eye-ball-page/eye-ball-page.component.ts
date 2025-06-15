import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-eye-ball-page',
  standalone: true,
  imports: [],
  templateUrl: './eye-ball-page.component.html',
  styleUrl: './eye-ball-page.component.scss',
})
export class EyeBallPageComponent {
  viewportWidth = window.innerWidth;
  isStyled = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.viewportWidth > 1366) {
      if (event.key === 'p' || event.key === 'P') {
        this.changeStyle();
      }
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (this.viewportWidth > 1366) {
      if (event.key === 'p' || event.key === 'P') {
        this.resetStyle();
      }
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart() {
    if (this.viewportWidth <= 1366) {
      this.changeStyleForTablet();
    }
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd() {
    if (this.viewportWidth <= 1366) {
      this.resetStyleForTablet();
    }
  }

  changeStyle() {
    let video5Top;
    let devPinTop;
    let video4Top;
    let logoPinTop;
    let video3Top;
    let designPinTop;
    let video2Top;
    let videoPinTop;
    let video1Top;
    let photoPinTop;
    if (window.innerHeight > 1440) {
      video5Top = 'calc(100vh - 1150px)';
      devPinTop = 'calc(100vh - 1270px)';
      video4Top = 'calc(100vh - 350px)';
      logoPinTop = 'calc(100vh - 380px)';
      video3Top = 'calc(100vh - 400px)';
      designPinTop = 'calc(100vh - 480px)';
      video2Top = 'calc(100vh - 800px)';
      videoPinTop = 'calc(100vh - 850px)';
      video1Top = 'calc(100vh - 1320px)';
      photoPinTop = 'calc(100vh - 1400px)';
    }
    else if ( window.innerHeight <= 1440 && window.innerHeight > 1080) {
      video5Top = 'calc(100vh - 1020px)';
      devPinTop = 'calc(100vh - 1140px)';
      video4Top = 'calc(100vh - 350px)';
      logoPinTop = 'calc(100vh - 380px)';
      video3Top = 'calc(100vh - 400px)';
      designPinTop = 'calc(100vh - 480px)';
      video2Top = 'calc(100vh - 700px)';
      videoPinTop = 'calc(100vh - 750px)';
      video1Top = 'calc(100vh - 1150px)';
      photoPinTop = 'calc(100vh - 1230px)';
    }
    else if (window.innerHeight <= 1080 && window.innerHeight > 900) {
      video5Top = 'calc(100vh - 850px)';
      devPinTop = 'calc(100vh - 970px)';
      video4Top = 'calc(100vh - 340px)';
      logoPinTop = 'calc(100vh - 370px)';
      video3Top = 'calc(100vh - 350px)';
      designPinTop = 'calc(100vh - 430px)';
      video2Top = 'calc(100vh - 600px)';
      videoPinTop = 'calc(100vh - 650px)';
      video1Top = 'calc(100vh - 920px)';
      photoPinTop = 'calc(100vh - 1015px)';
    }
    else{
      video5Top = 'calc(100vh - 650px)';
      devPinTop = 'calc(100vh - 770px)';
      video4Top = 'calc(100vh - 330px)';
      logoPinTop = 'calc(100vh - 360px)';
      video3Top = 'calc(100vh - 300px)';
      designPinTop = 'calc(100vh - 380px)';
      video2Top = 'calc(100vh - 500px)';
      videoPinTop = 'calc(100vh - 550px)';
      video1Top = 'calc(100vh - 780px)';
      photoPinTop = 'calc(100vh - 875px)';
    }
    
    const fileContainer = this.el.nativeElement.querySelector('.file-container');
    const file = this.el.nativeElement.querySelector('.file-icon');
    const appointment = this.el.nativeElement.querySelector('.appointment');
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
    const comingSoon = this.el.nativeElement.querySelector('.coming-soon-container');
    const where = this.el.nativeElement.querySelector('.where');
    const tape = this.el.nativeElement.querySelector('.tape');
    const coming = this.el.nativeElement.querySelector('.coming');
    const soon = this.el.nativeElement.querySelector('.soon');
    this.renderer.setStyle(appointment, 'display', 'none');
    this.renderer.setStyle(fileContainer, 'width', '1440px');
    this.renderer.setStyle(fileContainer, 'height', '100vh');
    this.renderer.setStyle(fileContainer, 'top', '0');
    this.renderer.setStyle(fileContainer, 'right', '0');
    this.renderer.setStyle(file, 'top', '-720px');
    this.renderer.setStyle(file, 'right', '-238px');
    this.renderer.setStyle(file, 'transform', 'rotate(-90deg)');
    this.renderer.setStyle(video5, 'top', video5Top); //DEV
    this.renderer.setStyle(video5, 'left', '77.5%'); //DEV
    this.renderer.setStyle(video5, 'rotate', '18deg');
    this.renderer.setStyle(video4, 'top', video4Top); //LOGO
    this.renderer.setStyle(video4, 'left', '75%'); //LOGO
    this.renderer.setStyle(video4, 'z-index', '6');
    this.renderer.setStyle(video3, 'top', video3Top); //DESIGN
    this.renderer.setStyle(video3, 'left', '32.5%'); //DESIGN
    this.renderer.setStyle(video3, 'rotate', '-27deg');
    this.renderer.setStyle(video2, 'top', video2Top); //VIDEO
    this.renderer.setStyle(video2, 'left', '12.5%'); //VIDEO
    this.renderer.setStyle(video2, 'rotate', '-18deg');
    this.renderer.setStyle(video1, 'top', video1Top); //PHOTO
    this.renderer.setStyle(video1, 'left', '37.5%'); //PHOTO
    this.renderer.setStyle(skotch, 'top', '7px');
    this.renderer.setStyle(skotch, 'right', '45px');
    this.renderer.setStyle(prodigmaOrg, 'width', '201px');
    this.renderer.setStyle(prodigmaOrg, 'top', '68px');
    this.renderer.setStyle(prodigmaOrg, 'right', '63px');
    this.renderer.setStyle(prodigmaOrg, 'rotate', '30deg');
    this.renderer.setStyle(prodigmaPin, 'width', '200px');
    this.renderer.setStyle(prodigmaPin, 'top', '50%'); //PRODIGMA
    this.renderer.setStyle(prodigmaPin, 'left', '50%'); //PRODIGMA
    this.renderer.setStyle(prodigmaPin, 'transform', 'translate(-50%, -50%) rotate(-50deg)');
    this.renderer.setStyle(prodigmaPin, 'rotate', 'unset');
    this.renderer.setStyle(videoPin, 'width', '200px');
    this.renderer.setStyle(videoPin, 'top', videoPinTop); //VIDEO
    this.renderer.setStyle(videoPin, 'left', '7.5%'); //VIDEO
    this.renderer.setStyle(photoPin, 'width', '200px');   
    this.renderer.setStyle(photoPin, 'top', photoPinTop); //PHOTO
    this.renderer.setStyle(photoPin, 'left', '42.5%'); //PHOTO
    this.renderer.setStyle(designPin, 'width', '200px');
    this.renderer.setStyle(designPin, 'top', designPinTop); //DESIGN
    this.renderer.setStyle(designPin, 'left', '37.5%'); //DESIGN
    this.renderer.setStyle(designPin, 'rotate', '45deg');
    this.renderer.setStyle(devPin, 'width', '200px');
    this.renderer.setStyle(devPin, 'top', devPinTop); //DEV
    this.renderer.setStyle(devPin, 'left', '77.5%'); //DEV
    this.renderer.setStyle(devPin, 'rotate', '30deg');
    this.renderer.setStyle(ductTape, 'width', '678px');
    this.renderer.setStyle(ductTape, 'top', 'unset');
    this.renderer.setStyle(ductTape, 'bottom', '0');
    this.renderer.setStyle(ductTape, 'right', '0');
    this.renderer.setStyle(logoPin, 'width', '150px');
    this.renderer.setStyle(logoPin, 'top', logoPinTop); //LOGO
    this.renderer.setStyle(logoPin, 'left', '70%'); //LOGO
    this.renderer.setStyle(logoPin, 'z-index', '7');
    this.renderer.setStyle(logoPin, 'rotate', '-45deg');
    this.renderer.setStyle(pBtn, 'opacity', '0');
    this.renderer.setStyle(links, 'opacity', '0');
    this.renderer.setStyle(comingSoon, 'top', '53px');
    this.renderer.setStyle(where, 'top', '83px');
    this.renderer.setStyle(where, 'left', '57px');
    this.renderer.setStyle(where, 'font-size', '1rem');
    this.renderer.setStyle(where, 'padding', '0 0.7rem');
    this.renderer.setStyle(tape, 'width', '423px');
    this.renderer.setStyle(tape, 'top', '7px');
    this.renderer.setStyle(tape, 'left', '-103px');
    this.renderer.setStyle(coming, 'font-size', '20rem');
    this.renderer.setStyle(coming, 'line-height', '10rem');
    this.renderer.setStyle(soon, 'font-size', '10rem');
    this.renderer.setStyle(soon, 'line-height', '6rem');
  }

  resetStyle() {
    const fileContainer = this.el.nativeElement.querySelector('.file-container');
    const file = this.el.nativeElement.querySelector('.file-icon');
    const appointment = this.el.nativeElement.querySelector('.appointment');
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
    const comingSoon = this.el.nativeElement.querySelector('.coming-soon-container');
    const where = this.el.nativeElement.querySelector('.where');
    const tape = this.el.nativeElement.querySelector('.tape');
    const coming = this.el.nativeElement.querySelector('.coming');
    const soon = this.el.nativeElement.querySelector('.soon');
    this.renderer.setStyle(appointment, 'display', 'unset');
    this.renderer.setStyle(fileContainer, 'width', '532px');
    this.renderer.setStyle(fileContainer, 'height', '739px');
    this.renderer.setStyle(fileContainer, 'top', '5vh');
    this.renderer.setStyle(fileContainer, 'right', '70px');
    this.renderer.setStyle(file, 'top', '60px');
    this.renderer.setStyle(file, 'right', '50px');
    this.renderer.setStyle(file, 'transform', 'rotate(0deg)');
    this.renderer.setStyle(video5, 'top', '338px');
    this.renderer.setStyle(video5, 'left', '250px'); //DEV
    this.renderer.setStyle(video5, 'rotate', '2deg');
    this.renderer.setStyle(video4, 'top', '242px');
    this.renderer.setStyle(video4, 'left', '160px'); //LOGO
    this.renderer.setStyle(video4, 'z-index', '5');
    this.renderer.setStyle(video3, 'top', '141px');
    this.renderer.setStyle(video3, 'left', '245px'); //DESIGN
    this.renderer.setStyle(video3, 'rotate', '2deg');
    this.renderer.setStyle(video2, 'top', '161px');
    this.renderer.setStyle(video2, 'left', '160px'); //VIDEO
    this.renderer.setStyle(video2, 'rotate', '4deg');
    this.renderer.setStyle(video1, 'top', '102px');
    this.renderer.setStyle(video1, 'left', '80px'); //PHOTO
    this.renderer.setStyle(skotch, 'top', '0');
    this.renderer.setStyle(skotch, 'right', '-1px');
    this.renderer.setStyle(prodigmaOrg, 'width', '164px');
    this.renderer.setStyle(prodigmaOrg, 'top', '625px');
    this.renderer.setStyle(prodigmaOrg, 'right', '299px');
    this.renderer.setStyle(prodigmaOrg, 'rotate', '0deg');
    this.renderer.setStyle(prodigmaPin, 'width', '120px');
    this.renderer.setStyle(prodigmaPin, 'top', '500px');
    this.renderer.setStyle(prodigmaPin, 'left', '110px');
    this.renderer.setStyle(prodigmaPin, 'transform', 'unset');
    this.renderer.setStyle(prodigmaPin, 'rotate', '0deg');
    this.renderer.setStyle(videoPin, 'width', '150px');
    this.renderer.setStyle(videoPin, 'top', '530px'); //VIDEO
    this.renderer.setStyle(videoPin, 'left', '180px'); //VIDEO
    this.renderer.setStyle(photoPin, 'width', '150px');
    this.renderer.setStyle(photoPin, 'top', '512.5px'); //PHOTO
    this.renderer.setStyle(photoPin, 'left', '260px'); //PHOTO
    this.renderer.setStyle(designPin, 'width', '150px');
    this.renderer.setStyle(designPin, 'top', '510px'); //DESIGN
    this.renderer.setStyle(designPin, 'left', '350px'); //DESIGN
    this.renderer.setStyle(designPin, 'rotate', '0deg');
    this.renderer.setStyle(devPin, 'width', '150px');
    this.renderer.setStyle(devPin, 'top', '570px'); //DEV
    this.renderer.setStyle(devPin, 'left', '280px'); //DEV
    this.renderer.setStyle(devPin, 'rotate', '-3deg');
    this.renderer.setStyle(ductTape, 'width', '226px');
    this.renderer.setStyle(ductTape, 'top', '538px');
    this.renderer.setStyle(ductTape, 'bottom', 'unset');
    this.renderer.setStyle(ductTape, 'right', '50px');
    this.renderer.setStyle(logoPin, 'width', '103px');
    this.renderer.setStyle(logoPin, 'top', '570px');
    this.renderer.setStyle(logoPin, 'left', '220px'); //LOGO
    this.renderer.setStyle(logoPin, 'z-index', '5');
    this.renderer.setStyle(logoPin, 'rotate', '0deg');
    this.renderer.setStyle(pBtn, 'opacity', '0.7');
    this.renderer.setStyle(links, 'opacity', '0.7');
    this.renderer.setStyle(comingSoon, 'top', '223px');
    this.renderer.setStyle(where, 'top', '190px');
    this.renderer.setStyle(where, 'left', '88px');
    this.renderer.setStyle(where, 'font-size', '1.4rem');
    this.renderer.setStyle(where, 'padding', '0 1.5rem');
    this.renderer.setStyle(tape, 'width', '572px');
    this.renderer.setStyle(tape, 'top', '80px');
    this.renderer.setStyle(tape, 'left', '-119px');
    this.renderer.setStyle(coming, 'font-size', '30rem');
    this.renderer.setStyle(coming, 'line-height', '15rem');
    this.renderer.setStyle(soon, 'font-size', '15rem');
    this.renderer.setStyle(soon, 'line-height', '8rem');
  }

  changeStyleForTablet() {
    let video5Top;
    let devPinTop;
    let video4Top;
    let logoPinTop;
    let video3Top;
    let designPinTop;
    let video2Top;
    let videoPinTop;
    let video1Top;
    let photoPinTop;
    if (window.innerHeight > 1440) {
      video5Top = 'calc(100vh - 1150px)';
      devPinTop = 'calc(100vh - 1270px)';
      video4Top = 'calc(100vh - 350px)';
      logoPinTop = 'calc(100vh - 380px)';
      video3Top = 'calc(100vh - 400px)';
      designPinTop = 'calc(100vh - 480px)';
      video2Top = 'calc(100vh - 800px)';
      videoPinTop = 'calc(100vh - 850px)';
      video1Top = 'calc(100vh - 1320px)';
      photoPinTop = 'calc(100vh - 1400px)';
    }
    else if ( window.innerHeight <= 1440 && window.innerHeight > 1080) {
      video5Top = 'calc(100vh - 920px)';
      devPinTop = 'calc(100vh - 980px)';
      video4Top = 'calc(100vh - 300px)';
      logoPinTop = 'calc(100vh - 320px)';
      video3Top = 'calc(100vh - 400px)';
      designPinTop = 'calc(100vh - 440px)';
      video2Top = 'calc(100vh - 800px)';
      videoPinTop = 'calc(100vh - 825px)';
      video1Top = 'calc(100vh - 1150px)';
      photoPinTop = 'calc(100vh - 1190px)';
    }
    else if (window.innerHeight <= 1080 && window.innerHeight > 900) {
      video5Top = 'calc(100vh - 750px)';
      devPinTop = 'calc(100vh - 810px)';
      video4Top = 'calc(100vh - 340px)';
      logoPinTop = 'calc(100vh - 360px)';
      video3Top = 'calc(100vh - 250px)';
      designPinTop = 'calc(100vh - 290px)';
      video2Top = 'calc(100vh - 520px)';
      videoPinTop = 'calc(100vh - 540px)';
      video1Top = 'calc(100vh - 900px)';
      photoPinTop = 'calc(100vh - 940px)';
    }
    else{
      video5Top = 'calc(100vh - 650px)';
      devPinTop = 'calc(100vh - 710px)';
      video4Top = 'calc(100vh - 230px)';
      logoPinTop = 'calc(100vh - 250px)';
      video3Top = 'calc(100vh - 280px)';
      designPinTop = 'calc(100vh - 330px)';
      video2Top = 'calc(100vh - 455px)';
      videoPinTop = 'calc(100vh - 480px)';
      video1Top = 'calc(100vh - 740px)';
      photoPinTop = 'calc(100vh - 775px)';
    }
    this.isStyled = true;

    const fileContainer = this.el.nativeElement.querySelector('.file-container');
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
    const scrBtn = this.el.nativeElement.querySelector('.screen-container');
    const links = this.el.nativeElement.querySelector('.links-container');
    const comingSoon = this.el.nativeElement.querySelector('.coming-soon-container');
    const appointment = this.el.nativeElement.querySelector('.appointment');
    this.renderer.setStyle(fileContainer, 'width', '100vw');
    this.renderer.setStyle(fileContainer, 'height', '100vh');
    this.renderer.setStyle(fileContainer, 'top', '0');
    this.renderer.setStyle(fileContainer, 'right', '0');
    this.renderer.setStyle(file, 'top', '-720px');
    this.renderer.setStyle(file, 'right', '-238px');
    this.renderer.setStyle(file, 'transform', 'rotate(-90deg)');
    this.renderer.setStyle(video5, 'top', video5Top);
    this.renderer.setStyle(video5, 'left', '70%'); //DEV
    this.renderer.setStyle(video5, 'rotate', '18deg');
    this.renderer.setStyle(video4, 'top', video4Top);
    this.renderer.setStyle(video4, 'left', '75%'); //LOGO
    this.renderer.setStyle(video4, 'z-index', '6');
    this.renderer.setStyle(video3, 'top', video3Top);
    this.renderer.setStyle(video3, 'left', '30%'); //DESIGN
    this.renderer.setStyle(video3, 'rotate', '-27deg');
    this.renderer.setStyle(video2, 'top', video2Top);
    this.renderer.setStyle(video2, 'left', '17.5%'); //VIDEO
    this.renderer.setStyle(video2, 'rotate', '-18deg');
    this.renderer.setStyle(video1, 'top', video1Top);
    this.renderer.setStyle(video1, 'left', '40%'); //PHOTO
    this.renderer.setStyle(skotch, 'top', '6px');
    this.renderer.setStyle(skotch, 'right', '19px');
    this.renderer.setStyle(skotch, 'width', '284px');
    this.renderer.setStyle(prodigmaOrg, 'width', '244px');
    this.renderer.setStyle(prodigmaOrg, 'top', '80px');
    this.renderer.setStyle(prodigmaOrg, 'right', '40px');
    this.renderer.setStyle(prodigmaOrg, 'rotate', '30deg');
    this.renderer.setStyle(prodigmaPin, 'width', '119px');
    this.renderer.setStyle(prodigmaPin, 'top', '50%'); //PRODIGMA
    this.renderer.setStyle(prodigmaPin, 'left', '50%'); //PRODIGMA
    this.renderer.setStyle(prodigmaPin, 'transform', 'translate(-50%, -50%) rotate(-50deg)');
    this.renderer.setStyle(prodigmaPin, 'rotate', 'unset');
    this.renderer.setStyle(videoPin, 'top', videoPinTop);
    this.renderer.setStyle(videoPin, 'left', '13.5%'); //VIDEO
    this.renderer.setStyle(photoPin, 'top', photoPinTop);
    this.renderer.setStyle(photoPin, 'left', '47.5%'); //PHOTO
    this.renderer.setStyle(designPin, 'top', designPinTop);
    this.renderer.setStyle(designPin, 'left', '35%'); //DESIGN
    this.renderer.setStyle(designPin, 'rotate', '45deg');
    this.renderer.setStyle(devPin, 'top', devPinTop); //LOGO
    this.renderer.setStyle(devPin, 'left', '71.5%'); //DEV
    this.renderer.setStyle(devPin, 'rotate', '30deg');
    this.renderer.setStyle(ductTape, 'width', '527px');
    this.renderer.setStyle(ductTape, 'top', 'calc(100% - 333px)');
    this.renderer.setStyle(ductTape, 'right', '0');
    this.renderer.setStyle(logoPin, 'top', logoPinTop); //LOGO
    this.renderer.setStyle(logoPin, 'left', '72.5%'); //LOGO
    this.renderer.setStyle(logoPin, 'z-index', '7');
    this.renderer.setStyle(logoPin, 'rotate', '-45deg');
    this.renderer.setStyle(scrBtn, 'opacity', '0');
    this.renderer.setStyle(links, 'opacity', '0');
    this.renderer.setStyle(comingSoon, 'top', '53px');
    this.renderer.setStyle(appointment, 'display', 'none');
  }

  resetStyleForTablet() {
    this.isStyled = false;

    const fileContainer = this.el.nativeElement.querySelector('.file-container');
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
    const scrBtn = this.el.nativeElement.querySelector('.screen-container');
    const links = this.el.nativeElement.querySelector('.links-container');
    const comingSoon = this.el.nativeElement.querySelector('.coming-soon-container');
    const appointment = this.el.nativeElement.querySelector('.appointment');
    this.renderer.setStyle(fileContainer, 'width', '343px');
    this.renderer.setStyle(fileContainer, 'height', '497px');
    this.renderer.setStyle(fileContainer, 'top', '116px');
    this.renderer.setStyle(fileContainer, 'right', '78px');
    this.renderer.setStyle(file, 'top', '45px');
    this.renderer.setStyle(file, 'right', '36px');
    this.renderer.setStyle(file, 'transform', 'rotate(0deg)');
    this.renderer.setStyle(video5, 'top', '230px');
    this.renderer.setStyle(video5, 'left', '150px'); //DEV
    this.renderer.setStyle(video5, 'rotate', '2deg');
    this.renderer.setStyle(video4, 'top', '165px');
    this.renderer.setStyle(video4, 'left', '100px'); //LOGO
    this.renderer.setStyle(video4, 'z-index', '5');
    this.renderer.setStyle(video3, 'top', '106px');
    this.renderer.setStyle(video3, 'left', '155px'); //DESIGN
    this.renderer.setStyle(video3, 'rotate', '2deg');
    this.renderer.setStyle(video2, 'top', '119px');
    this.renderer.setStyle(video2, 'left', '100px'); //VIDEO
    this.renderer.setStyle(video2, 'rotate', '4deg');
    this.renderer.setStyle(video1, 'top', '75px');
    this.renderer.setStyle(video1, 'left', '60px'); //PHOTO
    this.renderer.setStyle(skotch, 'top', '0');
    this.renderer.setStyle(skotch, 'right', '-1px');
    this.renderer.setStyle(skotch, 'width', '158px');
    this.renderer.setStyle(prodigmaOrg, 'width', '102px');
    this.renderer.setStyle(prodigmaOrg, 'top', '412px');
    this.renderer.setStyle(prodigmaOrg, 'right', '191px');
    this.renderer.setStyle(prodigmaOrg, 'rotate', '0deg');
    this.renderer.setStyle(prodigmaPin, 'width', '89px');
    this.renderer.setStyle(prodigmaPin, 'top', '325px');
    this.renderer.setStyle(prodigmaPin, 'left', '60px');
    this.renderer.setStyle(prodigmaPin, 'transform', 'unset');
    this.renderer.setStyle(prodigmaPin, 'rotate', '0deg');
    this.renderer.setStyle(videoPin, 'top', '354px');
    this.renderer.setStyle(videoPin, 'left', '117.5px'); //VIDEO
    this.renderer.setStyle(photoPin, 'top', '350px');
    this.renderer.setStyle(photoPin, 'left', '170px'); //PHOTO
    this.renderer.setStyle(designPin, 'top', '347px');
    this.renderer.setStyle(designPin, 'left', '220px'); //DESIGN
    this.renderer.setStyle(designPin, 'rotate', '0deg');
    this.renderer.setStyle(devPin, 'top', '384px');
    this.renderer.setStyle(devPin, 'left', '180px'); //DEV
    this.renderer.setStyle(devPin, 'rotate', '-3deg');
    this.renderer.setStyle(ductTape, 'width', '147px');
    this.renderer.setStyle(ductTape, 'right', '36px');
    this.renderer.setStyle(ductTape, 'top', '363px');
    this.renderer.setStyle(logoPin, 'top', '376px');
    this.renderer.setStyle(logoPin, 'left', '135px'); //LOGO
    this.renderer.setStyle(logoPin, 'z-index', '5');
    this.renderer.setStyle(logoPin, 'rotate', '0deg');
    this.renderer.setStyle(scrBtn, 'opacity', 'unset');
    this.renderer.setStyle(links, 'opacity', '0.7');
    this.renderer.setStyle(comingSoon, 'top', '223px');
    this.renderer.setStyle(appointment, 'display', 'unset');
  }

  openAppointment(): void {
    window.open('https://tally.so/r/mJxOxR', '_blank');
  }
  
}