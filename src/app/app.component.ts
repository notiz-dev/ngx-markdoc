import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main class="max-w-lg mx-auto mt-16">
      <prose>
        <markdoc> # Markdoc for Angular </markdoc>
        <markdoc>
          {{ content }}
        </markdoc>
      </prose>

      <router-outlet></router-outlet>
    </main>
  `,
  styles: [],
})
export class AppComponent {
  content = `
  # Headers

**Bold**

_Italic_

[Links](/docs/nodes)

Lists
- Item 1
- Item 1
- Item 1

> Quotes  
  `;
}
