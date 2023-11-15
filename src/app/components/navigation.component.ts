import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';

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
  imports: [RouterModule],
  template: `
    <nav class="text-base lg:text-sm">
      <ul role="list" class="space-y-6">
        @for (section of navigation; track section) {
          <li>
            <h2>
              <a>
                {{ section.title }}
              </a>
            </h2>
            <ul role="list" class="mt-2">
              @for (link of section.links; track link) {
                <li>
                  <a [routerLink]="link.url">
                    {{ link.title }}
                  </a>
                </li>
              }
            </ul>
          </li>
        }
      </ul>
    </nav>
  `,
  styles: [],
})
export class NavigationComponent {
  @Input() navigation!: Navigation[];
}
