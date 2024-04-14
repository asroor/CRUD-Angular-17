import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../shared/';

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit {
	breadcrumb$!: any
	constructor(private breadcrumbService: BreadcrumbService) {
	}
	ngOnInit(): void {
		this.breadcrumb$ = this.breadcrumbService.breadcrumb$;
	}
}
