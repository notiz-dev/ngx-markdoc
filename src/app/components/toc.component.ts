import { IsActiveMatchOptions, RouterModule } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOfContent } from '@notiz/ngx-markdoc';

@Component({
  selector: 'toc',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav *ngIf="toc?.length" class="sticky top-12 mt-12 ml-24 w-56">
      <p className="font-display text-sm font-medium text-slate-900">
        Table of Contents
      </p>
      <ol role="list" class="mt-4 space-y-3 text-sm">
        <li *ngFor="let heading of toc">
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
          <ol *ngIf="heading.children.length > 0" class="space-y3 mt-2 pl-5">
            <li *ngFor="let child of heading.children">
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
          </ol>
        </li>
      </ol>
    </nav>
  `,
  styles: [],
})
export class TocComponent implements OnInit {
  @Input() toc!: TableOfContent;

  routerLinkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };

  constructor() {}

  ngOnInit(): void {}
}
