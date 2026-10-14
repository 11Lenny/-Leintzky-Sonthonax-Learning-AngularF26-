import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { TEAMS_CONFIG } from './Shared/Models/teams';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: TEAMS_CONFIG,
      useValue: {
        apiBaseUrl: 'https://placeholder.mycreatedfiles.com/api',
        defaultCity: 'all',
      },
    },
  ],
};


