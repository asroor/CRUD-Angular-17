import { Subscription } from "rxjs";
import { CRUDService } from "../service/crud.service";

export abstract class Grid<IRes> {
	todos: IRes[]
	sub!: Subscription
	constructor(private CrudService: CRUDService<IRes>) {
		this.todos = []
		this.getAll()
	}
	delateFN(id: string): void {
		this.sub = this.CrudService.deleteTodo(id).subscribe(
			res => {
				this.getAll()
			}
		)
	}
	getAll() {
		this.sub = this.CrudService.getAllTodos().subscribe((res) => {
			this.todos = res
		})
	}
}