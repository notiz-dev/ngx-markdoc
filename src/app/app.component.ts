import { Component, HostBinding } from '@angular/core';
import { Navigation } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>

    <footer class="prose prose-sm mt-20">
      <p>
        &copy; {{ year }}
        <a href="https://portfolio.notiz.dev" target="_blank" rel="noopener"
          >notiz.dev</a
        >, All rights reserved.
      </p>
    </footer>
  `,
  styles: [],
})
export class AppComponent {
  @HostBinding('class') class = 'block mx-auto max-w-7xl p-4';

  year = new Date().getFullYear();

  navigation: Navigation[] = [
    {
      title: 'Getting Started',
      links: [{ title: 'Installation', url: '/' }],
    },
  ];
}
