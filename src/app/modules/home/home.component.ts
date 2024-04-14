import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../shared';
import { TBreadcrumb } from '../../../types';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
	constructor(private breadcrumbService: BreadcrumbService) { }
	breadcrumb: TBreadcrumb = {
		header: '',
		label: '',
		url: ''
	}
	ngOnInit(): void {
		this.breadcrumbService.setBreadcrumb([this.breadcrumb])
	}
}
