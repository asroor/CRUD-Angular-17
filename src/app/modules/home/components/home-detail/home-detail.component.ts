import { Component, Input } from '@angular/core';
import { ITodos } from '../../../../shared/interface';

@Component({
	selector: 'app-home-detail',
	templateUrl: './home-detail.component.html',
	styleUrl: './home-detail.component.css'
})
export class HomeDetailComponent {
	@Input() todo!:ITodos
}
