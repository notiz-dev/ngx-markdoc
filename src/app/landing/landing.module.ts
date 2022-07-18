import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { Hero } from '../components/hero/hero.component';
import { Markdoc } from '@notiz/ngx-markdoc';
import { Prose } from '../components/prose/prose.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, LandingRoutingModule, Hero, Markdoc, Prose],
})
export class LandingModule {}
