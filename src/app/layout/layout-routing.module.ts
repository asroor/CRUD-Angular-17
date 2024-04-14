import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
	{
		path: '', component: LayoutComponent,
		children: [
			{
				path: 'home', loadChildren: () => import('../modules').then((m) => m.HomeModule)
			},
			{
				path: 'todos', loadChildren: () => import('../modules').then((m) => m.TodosModule)
			},
		]
	},
	{ path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class LayoutRoutingModule { }