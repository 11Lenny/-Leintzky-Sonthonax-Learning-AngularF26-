import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { TEAMS_CONFIG } from './Shared/Models/teams';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: TEAMS_CONFIG,
      useValue: {
        apiBaseUrl: 'https://dog.ceo/api/breeds/image/random',
        defaultCity: 'all',
      },
    },
  ],
};


