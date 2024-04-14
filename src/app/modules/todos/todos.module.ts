import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';



@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodosModule { }
