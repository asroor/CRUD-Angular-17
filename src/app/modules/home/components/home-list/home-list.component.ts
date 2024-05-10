import { Component, OnInit } from '@angular/core';
import { AllTodosService } from '../../../../shared/';
import { ITodos } from '../../../../shared/interface';

@Component({
	selector: 'app-home-list',
	templateUrl: './home-list.component.html',
	styleUrl: './home-list.component.css'
})
export class HomeListComponent implements OnInit {
	todos: ITodos[]
	constructor(private allTodosService: AllTodosService) {
		this.todos = []
	}
	ngOnInit(): void {
		this.allTodosService.getAllTodos().subscribe((res) => {
			this.todos = res
		})
	}
}
