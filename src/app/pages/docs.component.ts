import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TocComponent } from '../components/toc.component';
import { Markdoc } from '../../../projects/ngx-markdoc/src/lib/markdoc.component';
import { Prose } from '../components/prose.component';
import { Logo } from '../components/logo.component';

@Component({
  selector: 'app-docs',
  template: `
    <logo></logo>
    <div class="flex flex-row">
      <div class="mt-12 max-w-2xl">
        <prose>
          <h1>{{ markdoc.frontmatter?.['title'] }}</h1>
          <markdoc #markdoc src="assets/md/docs/{{ slug }}.md"></markdoc>
        </prose>
      </div>
      @if (markdoc.toc) {
        <toc class="hidden lg:block" [toc]="markdoc.toc"></toc>
      }
    </div>
  `,
  standalone: true,
  imports: [Logo, Prose, Markdoc, TocComponent],
})
export class DocsComponent {
  slug = inject(ActivatedRoute).snapshot.paramMap.get('slug');
}
