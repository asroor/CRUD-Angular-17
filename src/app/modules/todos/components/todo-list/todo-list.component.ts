import { Component, OnDestroy } from '@angular/core';
import { AllTodosService } from '../../../../shared';
import { ITodos } from '../../../../shared';
import { Grid } from '../../../../shared';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrl: './todo-list.component.css'
})
export class TodoListComponent extends Grid<ITodos> implements OnDestroy {
	constructor($data: AllTodosService) {
		super($data)
	}
	ngOnDestroy(): void {
		this.sub.unsubscribe()
	}
}
