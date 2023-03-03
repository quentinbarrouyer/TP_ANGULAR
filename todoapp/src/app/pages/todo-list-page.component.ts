import { Component } from "@angular/core";
import { TasksService } from "../api/tasks.service";
import { Tasks } from "../types/task";

@Component({
    selector: "app-todo-list-page",
    template: `
        <app-todo-list 
            [tasks]="tasks" 
            (onToggle)="toggle($event)"
        >
        </app-todo-list>
        <app-task-form (onNewTask)="addTask($event)"></app-task-form>
    `
})
export class TodoListPageComponent {
    tasks: Tasks = [];

    constructor(private service: TasksService) { }

    ngOnInit() {
        this.service
            .findAll()
            .subscribe((tasks) => this.tasks = tasks)
    }

    toggle(id: number) {
        const task = this.tasks.find(task => task.id === id);

        if (task) {
            const isDone = !task.done;

            this.service
                .toggleDone(id, isDone)
                .subscribe(() => task.done = isDone);
        }
    }

    addTask(text: string) {
        this.service
            .create(text)
            .subscribe((tasks) => this.tasks.push(tasks[0]));
    }
}