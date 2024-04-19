import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITodos } from "../interface";

@Injectable({
	providedIn: 'root'
})
export class AllTodosService {
	constructor(private http: HttpClient) { }

	apiURL: string = 'http://localhost:3000/todos';

	/**
	 * 
	 * @returns 
	 */
	getAllTodos(): Observable<ITodos[]> {
		return this.http.get<ITodos[]>(this.apiURL);
	}

	/**
	 * 
	 * @param id 
	 * @returns 
	 */
	getTodo(id: number | string): Observable<ITodos> {
		return this.http.get<ITodos>(`${this.apiURL}/${id}`);
	}
	/**
	 * 
	 * @param todo 
	 * @returns 
	 */
	addTodo(todo: ITodos): Observable<ITodos> {
		return this.http.post<ITodos>(this.apiURL, todo);
	}
	/**
	 * 
	 * @param id 
	 * @param todo 
	 * @returns 
	 */
	updateTodo(id: number | string, todo: ITodos): Observable<ITodos> {
		return this.http.put<ITodos>(`${this.apiURL}/${id}`, todo);
	}
	/**
	 * 
	 * @param id 
	 * @returns 
	 */
	deleteTodo(id: number | string): Observable<ITodos> {
		return this.http.delete<ITodos>(`${this.apiURL}/${id}`);
	}
}
