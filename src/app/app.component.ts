import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>hola :)</h1>
    <p></p>
    <app-header></app-header>
    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = 'app';
}

