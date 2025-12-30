import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { Component, OnInit } from '@angular/core';
import { LoadingPageComponent } from './features/coming-soon/loading-page/loading-page.component';
import { LoadingMobileComponent } from './features/coming-soon/loading-mobile/loading-mobile.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        SharedModule,
        LoadingPageComponent,
        LoadingMobileComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Prodigma - Where Vision Meets Innovation');

    this.meta.updateTag({
      name: 'description',
      content: 'Prodigma is a full-service creative agency specializing in design, video, photography, and digital development.'
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });
  }

}