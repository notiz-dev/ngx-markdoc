# @notiz/ngx-markdoc

```bash
npm i @notiz/ngx-markdoc @markdoc/markdoc js-yaml

npm i -D @types/js-yaml
```

Set `allowSyntheticDefaultImports` to `true` in your `tsconfig.json`.

## Usage

Import `Markdoc` into your component module

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { Markdoc } from '@notiz/ngx-markdoc';

@NgModule({
  declarations: [DocsComponent],
  imports: [CommonModule, DocsRoutingModule, Markdoc],
})
export class DocsModule {}
```

Use the `<markdoc></markdoc>` component in your template. Provide Markdown content in one of the following ways.

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
