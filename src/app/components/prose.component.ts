import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'prose',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content></ng-content> `,
  styles: [],
})
export class Prose implements OnInit {
  @HostBinding() class = 'prose prose-lime';
  constructor() {}

  ngOnInit(): void {}
}
