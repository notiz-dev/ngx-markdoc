import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstallationRoutingModule } from './installation-routing.module';
import { InstallationComponent } from './installation.component';
import { Markdoc } from '@notiz/ngx-markdoc';
import { Prose } from '../components/prose/prose.component';
import { Hero } from '../components/hero/hero.component';

@NgModule({
  declarations: [InstallationComponent],
  imports: [CommonModule, InstallationRoutingModule, Hero, Markdoc, Prose],
})
export class InstallationModule {}
