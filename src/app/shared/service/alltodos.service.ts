import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ITodos } from "../interface";

@Injectable({
	providedIn: 'root'
})
export class AllTodosService {
	constructor(private http: HttpClient) { }


	private API = new BehaviorSubject<string>('http://localhost:3000/todos')

	/**
	 * 
	 * @returns 
	 */
	getAllTodos(): Observable<ITodos[]> {
		return this.http.get<ITodos[]>(this.API.value);
	}
	/**
	 * 
	 * @param id 
	 * @returns 
	 */
	getTodo(id: number): Observable<ITodos> {
		return this.http.get<ITodos>(this.API.value)
	}
	/**
	 * @param id
	 */
	addTodo(todo: ITodos): Observable<ITodos> {
		return this.http.post<ITodos>(this.API.value, todo)
	}
	/**
	 * 
	 * @param todo 
	 * @param id 
	 * @returns 
	 */
	updateTodo(todo: ITodos, id: number | string): Observable<ITodos> {
		return this.http.put<ITodos>(`${this.API}/${id}`, todo);
	}
	/**
	 * 
	 * @param id 
	 * @returns 
	 */

	delateTodo(id: number | string): Observable<ITodos> {
		return this.http.delete<ITodos>(`${this.API.value}/${id}`);
	}
}