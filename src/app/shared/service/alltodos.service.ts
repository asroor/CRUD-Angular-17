import { Injectable } from "@angular/core";
import { ITodos } from "../interface";
import { CRUDService } from "./crud.service";
import { BaseService } from "./base.service";

@Injectable({
	providedIn: 'root'
})
export class AllTodosService extends CRUDService<ITodos> {
	override apiURL: string = 'todos';
	constructor(protected override $base: BaseService) {
		super($base)
	}
}
