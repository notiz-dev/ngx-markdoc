import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import {
  figure,
  heading,
  image,
  provideMarkdocOptions,
} from '@notiz/ngx-markdoc';
import { markdocExample } from './markdoc-example';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
      }),
    ),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideMarkdocOptions({
      config: {
        nodes: { heading, image },
        tags: { figure, markdocExample },
      },
    }),
  ],
};
