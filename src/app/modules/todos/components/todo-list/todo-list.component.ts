import { Component, OnDestroy, OnInit } from '@angular/core';
import { AllTodosService } from '../../../../shared/service/alltodos.service';
import { ITodos } from '../../../../shared/interface';
import { Grid } from '../../../../shared/crud/grid';

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
