import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import { RouterModule, Routes } from '@angular/router';

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
		CommonModule, RouterModule.forChild(routes)
	]
})
export class HomeModule { }
