import { Component } from '@angular/core';
import { Navigation } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  template: `
    <main class="mx-auto max-w-7xl p-4">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [],
})
export class AppComponent {
  navigation: Navigation[] = [
    {
      title: 'Getting Started',
      links: [{ title: 'Installation', url: '/' }],
    },
  ];
}
