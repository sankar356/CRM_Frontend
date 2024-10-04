import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withHttpTransferCacheOptions, } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const layoutConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideClientHydration(withHttpTransferCacheOptions({
      includePostRequests: true,
    })),
    provideAnimations(),
    provideAnimationsAsync(),
  ]
};
