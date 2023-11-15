import { IsActiveMatchOptions, RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';

import { TableOfContent } from '@notiz/ngx-markdoc';

@Component({
  selector: 'toc',
  standalone: true,
  imports: [RouterModule],
  template: `
    @if (toc.length) {
      <nav class="sticky top-12 mt-12 ml-24 w-56">
        <p className="font-display text-sm font-medium text-slate-900">
          Table of Contents
        </p>
        <ol role="list" class="mt-4 space-y-3 text-sm">
          @for (heading of toc; track heading) {
            <li>
              <h3>
                <a
                  routerLink="."
                  [fragment]="heading.id"
                  routerLinkActive="text-lime-500"
                  [routerLinkActiveOptions]="routerLinkActiveOptions"
                >
                  {{ heading.title }}
                </a>
              </h3>
              @if (heading.children.length > 0) {
                <ol class="space-y3 mt-2 pl-5">
                  @for (child of heading.children; track child) {
                    <li>
                      <h3>
                        <a
                          routerLink="."
                          [fragment]="child.id"
                          routerLinkActive="text-lime-500"
                          [routerLinkActiveOptions]="routerLinkActiveOptions"
                        >
                          {{ child.title }}
                        </a>
                      </h3>
                    </li>
                  }
                </ol>
              }
            </li>
          }
        </ol>
      </nav>
    }
  `,
  styles: [],
})
export class TocComponent {
  @Input() toc!: TableOfContent;

  routerLinkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };
}
