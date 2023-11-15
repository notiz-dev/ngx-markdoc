import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'logo',
  standalone: true,
  imports: [RouterModule],
  template: `
    <a routerLink="/" class="flex items-center space-x-4">
      <img
        class="h-16 w-16 rounded-full"
        src="assets/logo.svg"
        alt="notiz.dev"
      />

      <h1 class="text-3xl font-extrabold">&#64;notiz/ngx-markdoc</h1>
    </a>
  `,
})
export class Logo {}
