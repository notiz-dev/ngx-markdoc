import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { Prose } from '../components/prose/prose.component';
import { Markdoc } from '@notiz/ngx-markdoc';
import { Logo } from '../components/logo/logo.component';

@NgModule({
  declarations: [DocsComponent],
  imports: [CommonModule, DocsRoutingModule, Prose, Markdoc, Logo],
})
export class DocsModule {}
