import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "./base.service";

@Injectable({
	providedIn: 'root',
})

export abstract class CRUDService<IRes> {

	abstract apiURL: string;

	constructor(protected $base: BaseService) { }
	/**
	 * 
	 * @returns 
	 */
	getAllTodos(): Observable<IRes[]> {
		return this.$base.get<IRes[]>(this.apiURL);
	}

	/**
	 * 
	 * @param id 
	 * @returns 
	 */
	getTodo(id: string): Observable<IRes> {
		return this.$base.get<IRes>(`${this.apiURL}/${id}`);
	}
	/**
	 * 
	 * @param todo 
	 * @returns 
	 */
	addTodo(todo: IRes): Observable<IRes> {
		return this.$base.post<IRes>(this.apiURL, todo);
	}
	/**
	 * 
	 * @param id 
	 * @param todo 
	 * @returns 
	 */
	updateTodo(id: string, todo: IRes): Observable<IRes> {
		return this.$base.put<IRes>(`${this.apiURL}/${id}`, todo);
	}
	/**
	 * 
	 * @param id 
	 * @returns 
	 */
	deleteTodo(id: string): Observable<IRes> {
		return this.$base.delate<IRes>(`${this.apiURL}/${id}`);
	}
}