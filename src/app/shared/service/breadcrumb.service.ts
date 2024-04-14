import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TBreadcrumb } from '../../../types/';

@Injectable({
	providedIn: 'root'
})
export class BreadcrumbService {
	breadcrumb$ = new BehaviorSubject<Array<{
		header: string;
		label: string;
		url: string
	}>>([])
	constructor() { }

	setBreadcrumb(breadcrumb: Array<{
		header: string;
		label: string;
		url: string
	}>) {
		this.breadcrumb$.next(breadcrumb)
	}
}
