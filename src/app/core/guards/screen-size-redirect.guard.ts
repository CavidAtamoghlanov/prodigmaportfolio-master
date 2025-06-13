import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const screenSizeRedirectGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (typeof window === 'undefined') {
    // Fallback for SSR or non-browser environments
    router.navigate(['/mobile-version']);

    return false;
  }

  const redirectTo = window.innerWidth >= 768 ? '/web-version' : '/mobile-version';
  router.navigate([redirectTo]);
  
  return false;
};

