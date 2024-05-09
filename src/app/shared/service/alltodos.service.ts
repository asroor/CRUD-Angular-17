import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITodos } from "../interface";
import { BaseService } from "./base.service";

@Injectable({
	providedIn: 'root'
})
export class AllTodosService {
	constructor(private $base: BaseService) { }

	apiURL: string = 'todos';

	/**
	 * 
	 * @returns 
	 */
	getAllTodos(): Observable<ITodos[]> {
		return this.$base.get<ITodos[]>(this.apiURL);
	}

	/**
	 * 
	 * @param id 
	 * @returns 
	 */
	getTodo(id: string): Observable<ITodos> {
		return this.$base.get<ITodos>(`${this.apiURL}/${id}`);
	}
	/**
	 * 
	 * @param todo 
	 * @returns 
	 */
	addTodo(todo: ITodos): Observable<ITodos> {
		return this.$base.post<ITodos>(this.apiURL, todo);
	}
	/**
	 * 
	 * @param id 
	 * @param todo 
	 * @returns 
	 */
	updateTodo(id: string, todo: ITodos): Observable<ITodos> {
		return this.$base.put<ITodos>(`${this.apiURL}/${id}`, todo);
	}
	/**
	 * 
	 * @param id 
	 * @returns 
	 */
	deleteTodo(id: string): Observable<ITodos> {
		return this.$base.delate<ITodos>(id, this.apiURL);
	}
}
