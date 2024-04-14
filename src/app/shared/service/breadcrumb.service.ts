import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TBreadcrumb } from '../../../types/';

@Injectable({
	providedIn: 'root'
})
export class BreadcrumbService {
	breadcrumb$ = new BehaviorSubject<TBreadcrumb[]>([])
	constructor() { }

	setBreadcrumb(breadcrumb: TBreadcrumb[]) {
		this.breadcrumb$.next(breadcrumb)
	}
}
