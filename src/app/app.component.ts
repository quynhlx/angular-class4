import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <app-menu-side-bar></app-menu-side-bar>
    <app-container></app-container>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'app';
}
