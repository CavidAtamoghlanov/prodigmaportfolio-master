import { Routes } from '@angular/router';
import { LoadingPageComponent } from './features/coming-soon/loading-page/loading-page.component';
import { screenSizeRedirectGuard } from './core/guards/screen-size-redirect.guard';
import { LoadingMobileComponent } from './features/coming-soon/loading-mobile/loading-mobile.component';

export const routes: Routes = [
    { path: '', canActivate: [screenSizeRedirectGuard], component: LoadingPageComponent },
    { path: 'web-version',  component: LoadingPageComponent },
    { path: 'mobile-version',  component: LoadingMobileComponent },
];
