import { Component, Input } from "@angular/core";
import { Tasks } from './types/task';

@Component({
    // Ce composant sera affiché par Angular à chaque fois
    // qu'un élément <app-todo-list> sera rencontré dans
    // un template HTML
    selector: 'app-todo-list',
    // Le HTML reprend ici notre liste de tâches
    template: `
        <ul>
            <li *ngFor="let item of tasks">
                <label>
                <input 
                    type="checkbox" 
                    id="item-{{ item.id }}" 
                    [checked]="item.done" 
                />
                {{ item.text }}
                </label>
            </li>
        </ul>
    `
})
export class TodoListComponent {
    @Input()
    tasks: Tasks = []; 
}