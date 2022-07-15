import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Markdoc } from '@notiz/ngx-markdoc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Prose } from './components/prose/prose.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Markdoc, Prose],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
