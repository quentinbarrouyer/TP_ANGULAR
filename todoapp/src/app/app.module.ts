// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskFormComponent } from './task-form.component';
import { TodoListComponent } from './todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    // En important le ReactiveFormsModule, on importe des
    // composants, directives et services qu'il met à notre 
    // disposition !
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }