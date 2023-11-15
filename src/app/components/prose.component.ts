import { Component } from '@angular/core';

@Component({
  selector: 'prose',
  standalone: true,
  template: ` <ng-content></ng-content> `,
  host: {
    class: 'prose prose-lime',
  },
})
export class Prose {}
