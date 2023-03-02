import { Component, Input } from "@angular/core";

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
    // Le décorateur Input permet de spécifier à Angular
    // que cette donnée tasks pourra être renseignée depuis
    // l'extérieur du composant. Par défaut, le tableau sera vide
    // mais il prendra la valeur qu'on lui donne depuis l'extérieur
    // si c'est le cas
    @Input()
    tasks = [{ id: 0, text: "", done: false }]; 
}