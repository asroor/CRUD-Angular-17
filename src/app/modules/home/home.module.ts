import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';

import { HomeComponent } from './home.component';
import { HomeListComponent } from './components/home-list/home-list.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
]

@NgModule({
	declarations: [
		HomeComponent,
		HomeListComponent,
	],
	imports: [
		CommonModule, RouterModule.forChild(routes),
		NzTableModule,
		NzButtonModule
	]
})
export class HomeModule { }
