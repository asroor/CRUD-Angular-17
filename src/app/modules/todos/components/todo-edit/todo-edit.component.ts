import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AllTodosService } from '../../../../shared';
@Component({
	selector: 'app-todo-edit',
	templateUrl: './todo-edit.component.html',
	styleUrl: './todo-edit.component.css'
})
export class TodoEditComponent implements OnInit {
	isAddPage: boolean = false
	constructor(private fb: FormBuilder, private route: ActivatedRoute, private allTodosService: AllTodosService, private router: Router) {
	}
	form = this.fb.nonNullable.group({
		userId: [1, Validators.required],
		todo: ['', Validators.required],
		completed: [false],
	});
	pageTodoID: string = this.route.snapshot.params['id']
	ngOnInit(): void {
		this.pageRoute()
	}
	pageRoute() {
		const currentURL: string = this.route.snapshot.url[0].path
		if (currentURL === 'add') {
			this.isAddPage = true;
		} else {
			this.isAddPage = false;
			this.allTodosService.getTodo(this.pageTodoID).subscribe((res) => {
				type FormControlKeys = keyof typeof this.form.controls
				this.form.controls.completed.setValue(res.completed)
				this.form.controls.todo.setValue(res.todo)
				this.form.controls.userId.setValue(res.userId)
			})
		}
	}
	editTodo() {
		if (this.form.getRawValue().todo !== '' && this.isAddPage) {
			this.allTodosService.addTodo(this.form.getRawValue()).subscribe(
				res => {
					this.router.navigate(['todos'])
				}
			)
		} else if (this.form.getRawValue().todo !== '' && !this.isAddPage) {
			this.allTodosService.updateTodo(this.pageTodoID, this.form.getRawValue()).subscribe(
				res => {
					this.router.navigate(['todos'])
				}
			)
		}
	}
}

