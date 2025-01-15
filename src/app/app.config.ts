import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY, RecaptchaSettings } from 'ng-recaptcha';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(),
    provideClientHydration(),provideAnimations(), provideAnimationsAsync(),
    {
      provide: RECAPTCHA_SETTINGS,
      useValue:{
        siteKey: '6LfgCrcqAAAAACCevKhIn-oSOQSf9byC3qM-VRQH'
      } as RecaptchaSettings
    }
  ]
    
};
