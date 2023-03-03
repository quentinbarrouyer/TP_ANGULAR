// Le décorateur Component permet de donner à Angular des informations
// supplémentaires sur une classe afin d'expliquer que :
// 1. C'est un composant ;
// 2. Il devra afficher un template HTML donné ;
// 3. Il aura des styles scopés ;
// Et beaucoup d'autres choses encore

import { Component } from '@angular/core';
import { Tasks } from './types/task';
import { HttpClient } from "@angular/common/http";
import { TasksService } from './api/tasks.service';

@Component({
  selector: 'app-root',
  template: `
    <div id="app">
        <h1>La Todo App</h1>

        <main>
          <app-todo-list 
            [tasks]="tasks" 
            (onToggle)="toggle($event)"
          ></app-todo-list>
          <app-task-form 
            (onNewTask)="addTask($event)"
          ></app-task-form>
        </main>
    </div>
  `,
  styles: []
})
export class AppComponent {
  // Supprimons les tasks qui étaient en dur dans le tableau
  // d'objets et remplaçons cela par un tableau vide au départ
  tasks: Tasks = [];


  // Le constructeur nous permet toujours d'obtenir une instance
  // du HttpClient, mais on ne l'utilise plus du tout dans 
  // le constructeur

  // On ajoute au constructeur une demande de recevoir une instance
  // du TasksService :
  constructor(
    private http: HttpClient, 
    private service: TasksService
  ) { }

  ngOnInit() {
    // On remplace le code de la requête HTTP par l'appel
    // à la méthode findAll() de notre service, qui renverra
    // exactement la même chose que ce que renvoyait le
    // HttpClient, on réagira donc de la même manière via la 
    // méthode subscribe()
    this.service
      .findAll()
      .subscribe((tasks) => this.tasks = tasks)
  }

  // La méthode addTask recevra une string
  addTask(text: string) {
    this.service
      .create(text)
      .subscribe((tasks) => this.tasks.push(tasks[0]));
  }


  // Lorsque le composant TodoListComponent va emettre l'événement
  // (onToggle), on va l'écouter et appeler cette méthode on passant
  // l'événement (qui est un identifiant numérique d'une tâche)
  toggle(id: number) {
    // On retrouve la tâche qui correspond à l'identifiant
    const task = this.tasks.find(task => task.id === id);

    // Si la tâche existe
    if (task) {
      // On récupère l'inverse de son statut
      const isDone = !task.done;
      
      this.service
        .toggleDone(id, isDone)
        .subscribe(() => task.done = isDone);
    }
  }
}