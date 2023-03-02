// Le décorateur Component permet de donner à Angular des informations
// supplémentaires sur une classe afin d'expliquer que :
// 1. C'est un composant ;
// 2. Il devra afficher un template HTML donné ;
// 3. Il aura des styles scopés ;
// Et beaucoup d'autres choses encore

import { Component } from '@angular/core';
import { Tasks } from './types/task';

@Component({
  selector: 'app-root',
  template: `
    <div id="app">
        <h1>La Todo App</h1>

        <main>
          <app-todo-list 
            [tasks]="tasks"
          ></app-todo-list>
        </main>
    </div>
  `,
  styles: []
})
export class AppComponent {
  tasks: Tasks = [
    { id: 1, text: "Aller faire des courses", done: false },
    { id: 2, text: "Faire à manger", done: true },
  ];
}