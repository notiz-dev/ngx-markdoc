import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-landing',
  template: `
    <hero></hero>

    <div class="grid gap-12 lg:grid-cols-2 lg:gap-8 lg:divide-x">
      <div>
        <p class="mb-6 text-3xl font-semibold text-lime-500">Markdown file</p>
        <prose>
          <pre class="whitespace-pre-line">
            {{ example$ | async }}
          </pre
          >
        </prose>
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
  styles: [],
})
export class LandingComponent implements OnInit {
  example$ = this.http
    .get('assets/md/example.md', { responseType: 'text' })
    .pipe(map((md) => md.trim()));
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
