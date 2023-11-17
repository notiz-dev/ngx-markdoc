import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Markdoc } from '@notiz/ngx-markdoc';
import { Prose } from '../components/prose.component';
import { Hero } from '../components/hero.component';
import { shiki } from '../shiki';
import { defer, filter, from, map, switchMap } from 'rxjs';
import { UnsecureHtmlPipe } from '../unsecure.pipe';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [Hero, Prose, Markdoc, AsyncPipe, UnsecureHtmlPipe],
  template: `
    <hero></hero>

    <div class="grid gap-12 grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:divide-x">
      <div>
        <p class="mb-6 text-3xl font-semibold text-lime-500">Markdown file</p>
        @if (example$ | async; as example) {
          <prose>
            <div [innerHTML]="example | unsecureHtml"></div>
          </prose>
        }
      </div>

      <div class="lg:pl-8">
        <p class="mb-6 text-3xl font-semibold text-lime-500">
          Markdoc component + frontmatter
        </p>
        <prose>
          <h1>{{ markdoc.frontmatter?.['title'] }}</h1>
          <p>{{ markdoc.frontmatter?.['description'] }}</p>

          <markdoc #markdoc src="assets/md/example.md"></markdoc>
        </prose>
      </div>
    </div>
  `,
})
export class LandingComponent {
  private http = inject(HttpClient);

  example$ = this.http
    .get('assets/md/example.md', { responseType: 'text' })
    .pipe(switchMap((content) => shiki(content, 'markdown')));
}
