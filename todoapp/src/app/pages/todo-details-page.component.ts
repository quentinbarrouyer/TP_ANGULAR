import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TasksService } from "../api/tasks.service";
import { Tasks, Task } from "../types/task";

@Component({
    selector: 'app-todo-details-page',
    template: `
        <ng-container *ngIf="task">
            <h2>{{ task.text }}</h2>
            <strong>Statut : </strong>
            {{ task.done ? "Fait" : "Pas fait"}}
            <br />
            <a routerLink="/">Retour aux tâches</a>
        </ng-container>

        <p *ngIf="!task">En cours de chargement</p>
    `
})
export class TodoDetailsPageComponent {
    task?: Task;

    constructor(private route: ActivatedRoute, private service: TasksService) { }

    ngOnInit() {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));

        this.service
            .findOne(id)
            .subscribe(tasks => this.task = tasks[0]);
    }
}