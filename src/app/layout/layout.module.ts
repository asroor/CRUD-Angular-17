import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';




@NgModule({
  declarations: [
    LayoutComponent,
    BreadcrumbComponent
  ],
  imports: [
		CommonModule, 
		NzLayoutModule, 
		NzBreadCrumbModule, 
		LayoutRoutingModule,
		NzMenuModule
  ]
})
export class LayoutModule { }
