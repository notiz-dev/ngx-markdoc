import { Pipe, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  standalone: true,
  name: 'unsecureHtml',
})
export class UnsecureHtmlPipe {
  private sanitizer = inject(DomSanitizer);
  transform(value: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
