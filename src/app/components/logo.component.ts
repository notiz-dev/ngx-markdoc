import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'logo',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
  styles: [],
})
export class Logo implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
