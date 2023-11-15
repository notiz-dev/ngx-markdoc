# @notiz/ngx-markdoc

```bash
npm i @notiz/ngx-markdoc @markdoc/markdoc js-yaml

npm i -D @types/js-yaml
```

Set `allowSyntheticDefaultImports` to `true` in your `tsconfig.json`.

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
import { ActivatedRoute } from '@angular/router';
import { Markdoc } from '@notiz/ngx-markdoc';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [Markdoc],
  template: `
    <markdoc #markdoc src="assets/md/docs/getting-started.md"></markdoc>
  `,
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
