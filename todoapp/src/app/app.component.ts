import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="app">
        <h1>La Todo App</h1>

        <main>
          <router-outlet></router-outlet>
        </main>
    </div>
  `,
  styles: []
})
export class AppComponent { }