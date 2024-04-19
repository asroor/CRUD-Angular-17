import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
	{
		path: "", component: TodosComponent, children: [
			{ path: '', component: TodoListComponent },
			{ path: 'update/:id', component: TodoEditComponent },
			{ path: 'add', component: TodoEditComponent },
			{ path: 'edit/:id', component: TodoEditComponent }
		]
	}
]

@NgModule({
	declarations: [
		TodosComponent,
		TodoListComponent,
		TodoEditComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		NzTableModule,
		NzButtonModule,
		ReactiveFormsModule,
		NzInputModule
	]
})
export class TodosModule { }
