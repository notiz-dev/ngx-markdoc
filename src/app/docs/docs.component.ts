import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-docs',
  template: `
    <logo></logo>
    <div class="mt-12 max-w-2xl">
      <prose>
        <h1>{{ markdoc.frontmatter?.['title'] }}</h1>
        <markdoc #markdoc src="assets/md/docs/{{ slug }}.md"></markdoc>
      </prose>
    </div>

    <prose>
    </prose>
  `,
  styles: [],
})
export class DocsComponent implements OnInit {
  slug = this.route.snapshot.paramMap.get('slug');

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
