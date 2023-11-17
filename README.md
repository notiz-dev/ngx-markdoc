# @notiz/ngx-markdoc

```bash
npm i @notiz/ngx-markdoc @markdoc/markdoc js-yaml

npm i -D @types/js-yaml
```

Set `esModuleInterop` to `true` in your `tsconfig.json`.

## Usage

Provide `HttpClient` in your `app.config.ts`

```ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};
```

Import `Markdoc` into your component and use `<markdoc></markdoc>` in your template.

```ts
import { Component } from '@angular/core';
import { Markdoc } from '@notiz/ngx-markdoc';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [Markdoc],
  template: ` <markdoc src="assets/md/docs/getting-started.md"></markdoc> `,
})
export class DocsComponent {}
```

### 1. Content

```html
<markdoc> # Markdoc for Angular </markdoc>
```

### 2. Content input

```html
<markdoc content="# Markdoc for Angular"> </markdoc>
```

### 3. Markdown file

```html
<markdoc src="assets/md/example.md"></markdoc>
```

## Options

Use `provideMarkdocOptions` to optionally pass a Markdoc configuration options.

```ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

import { provideMarkdocOptions } from '@notiz/ngx-markdoc';
import { Config, Node, Tag } from '@markdoc/markdoc';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideMarkdocOptions({
      config: {
        tags: {
          figure: {
            selfClosing: true,
            attributes: {
              src: { type: String, required: true },
              alt: { type: String, required: true },
              caption: { type: String, required: true },
            },
            transform: (node: Node, config: Config) => {
              const { src, alt, caption } = node.transformAttributes(config);
              const imageTag = new Tag('img', { src, alt });
              const captionTag = new Tag('figcaption', {}, [caption]);
              return new Tag('figure', {}, [imageTag, captionTag]);
            },
          },
        },
      },
    }),
  ],
};
```

Now you can use `{% figure %}` tag in your Markdown file

```md
{% figure src="https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1675&q=80" alt="Pelican nebulae mosaic" caption="Pelican nebulae mosaic" /%}
```
