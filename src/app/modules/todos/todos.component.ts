import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../shared';
import { TBreadcrumb } from '../../../types';

@Component({
	selector: 'app-todos',
	templateUrl: './todos.component.html',
	styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
	constructor(private breadcrumbService: BreadcrumbService) { }
	breadcrumb: TBreadcrumb = {
		header: 'Todos',
		label: '',
		url: 'todos',
	}
	ngOnInit(): void {
		this.breadcrumbService.setBreadcrumb([this.breadcrumb])
	}
}
