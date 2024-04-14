import { Component, OnInit } from '@angular/core';
import { AllTodosService } from '../../../../shared/service/alltodos.service';
import { ITodos } from '../../../../shared/interface';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
	todos: ITodos[]
	sub!: Subscription
	constructor(private allTodosService: AllTodosService) {
		this.todos = []
	}
	ngOnInit(): void {
		this.sub = this.allTodosService.getAllTodos().subscribe((res) => {
			this.todos = res
		})
	}
}
