import { Component, OnDestroy, OnInit } from '@angular/core';
import { AllTodosService } from '../../../../shared/service/alltodos.service';
import { ITodos } from '../../../../shared/interface';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit, OnDestroy {
	todos: ITodos[]
	sub!: Subscription
	constructor(private allTodosService: AllTodosService, private route: ActivatedRoute) {
		this.todos = []
	}
	ngOnInit(): void {
		this.getAll()
	}
	delateFN(id: string): void {
		this.sub = this.allTodosService.deleteTodo(id).subscribe(
			res => {
				this.getAll()
			}
		)
	}
	getAll() {
		this.sub = this.allTodosService.getAllTodos().subscribe((res) => {
			this.todos = res
		})
	}
	ngOnDestroy(): void {
		this.sub.unsubscribe()
	}
}
