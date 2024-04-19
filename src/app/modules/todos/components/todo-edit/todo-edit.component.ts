import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AllTodosService } from '../../../../shared/service/alltodos.service';
import { ITodos } from '../../../../shared/interface';

@Component({
	selector: 'app-todo-edit',
	templateUrl: './todo-edit.component.html',
	styleUrl: './todo-edit.component.css'
})
export class TodoEditComponent implements OnInit {
	isAddPage: boolean = false
	constructor(private fb: FormBuilder, private route: ActivatedRoute, private allTodosService: AllTodosService, private router: Router) {
		const currentURL: string = route.snapshot.url[0].path
		if (currentURL === 'add') {
			this.isAddPage = true;
		} else {
			this.isAddPage = false;
		}
	}
	form = this.fb.nonNullable.group({
		userId: [1, Validators.required],
		todo: ['', Validators.required],
		completed: [false],
	});
	pageTodoID: number | string = this.route.snapshot.params['id']
	ngOnInit(): void {
	}
	editTodo() {
		if (this.form.getRawValue().todo !== '' && this.isAddPage) {
			this.allTodosService.addTodo(this.form.getRawValue()).subscribe()
			this.router.navigate(['todos'])
		} else if (this.form.getRawValue().todo !== '' && !this.isAddPage) {
			this.allTodosService.updateTodo(this.form.getRawValue(), this.pageTodoID)
			this.router.navigate(['todos'])
		}
	}
}

