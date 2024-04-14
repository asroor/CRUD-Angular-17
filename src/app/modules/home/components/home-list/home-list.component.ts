import { Component, OnInit } from '@angular/core';
import { TBreadcrumb } from '../../../../../types';
import { BreadcrumbService } from '../../../../shared';

@Component({
	selector: 'app-home-list',
	templateUrl: './home-list.component.html',
	styleUrl: './home-list.component.css'
})
export class HomeListComponent implements OnInit {
	breadcrumb: TBreadcrumb = { header: "Todos", label: '', url: "URL" }
	constructor(private breadcrumbService: BreadcrumbService) {	}
	ngOnInit(): void {
		this.breadcrumbService.setBreadcrumb([this.breadcrumb])
	}
}
