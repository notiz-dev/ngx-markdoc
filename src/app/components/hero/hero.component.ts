import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prose } from '../prose/prose.component';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [CommonModule, Prose],
  template: `
    <div>
      <h1 class="text-4xl font-semibold text-gray-900">@notiz/ngx-markdoc</h1>
      <p class="max-w-md mt-4 text-2xl text-gray-800">
        <a class="underline text-lime-500" href="https://markdoc.io/">
          Markdoc
        </a>
        component for your Angular application.
      </p>

      <div class="mt-6 flex">
        <a
          class="bg-lime-300 rounded-full px-4 py-2 text-sm font-medium"
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
