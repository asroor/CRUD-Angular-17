import { Component, OnDestroy } from '@angular/core';
import { AllTodosService, Grid } from '../../../../shared/';
import { ITodos } from '../../../../shared';

@Component({
	selector: 'app-home-list',
	templateUrl: './home-list.component.html',
	styleUrl: './home-list.component.css'
})
export class HomeListComponent extends Grid<ITodos> implements OnDestroy {

	constructor($data: AllTodosService) {
		super($data);
	}
	ngOnDestroy(): void {
		this.sub.unsubscribe()
	}
}
