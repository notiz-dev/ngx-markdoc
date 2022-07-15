import { RouterModule } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Link {
  title: string;
  url: string;
}
export interface Navigation {
  title: string;
  links: Link[];
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="text-base lg:text-sm">
      <ul role="list" class="space-y-6">
        <li *ngFor="let section of navigation">
          <h2>
            <a>
              {{ section.title }}
            </a>
          </h2>
          <ul role="list" class="mt-2">
            <li *ngFor="let link of section.links">
              <a [routerLink]="link.url">
                {{ link.title }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  `,
  styles: [],
})
export class NavigationComponent implements OnInit {
  @Input() navigation!: Navigation[];
  constructor() {}

  ngOnInit(): void {}
}
