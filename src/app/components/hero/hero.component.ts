import { RouterModule } from '@angular/router';
import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div>
      <h1 class="text-4xl font-semibold text-gray-900">@notiz/ngx-markdoc</h1>
      <p class="mt-4 text-2xl text-gray-800">
        <a class="text-lime-500 underline" href="https://markdoc.io/">
          Markdoc
        </a>
        component for your Angular application.
      </p>

      <div class="mt-6 flex gap-4">
        <a
          class="rounded-full bg-lime-300 px-4 py-2 text-sm font-medium"
          routerLink="docs/installation"
        >
          Get started
        </a>
        <a
          class="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900"
          href="https://github.com/notiz-dev/ngx-markdoc"
        >
          View on GitHub
        </a>
      </div>
    </div>
  `,
  styles: [],
})
export class Hero implements OnInit {
  @HostBinding() class = 'block mt-24 mb-16';
  constructor() {}

  ngOnInit(): void {}
}
