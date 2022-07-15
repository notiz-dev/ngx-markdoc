import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installation',
  template: `
    <hero></hero>

    <prose>
      <h2>{{ markdoc.frontmatter?.['title'] }}</h2>
      <markdoc #markdoc src="assets/md/installation.md"></markdoc>
    </prose>
  `,
  styles: [],
})
export class InstallationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
