import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { HomeComponent } from './home.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';

const routes: Routes = [
	{ path: '', component: HomeComponent }
]

@NgModule({
	declarations: [
		HomeComponent,
		HomeListComponent,
		HomeDetailComponent
	],
	imports: [
		CommonModule, RouterModule.forChild(routes),
		NzTableModule
	]
})
export class HomeModule { }
