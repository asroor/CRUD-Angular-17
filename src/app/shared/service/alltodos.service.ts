import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITodos } from "../interface";

@Injectable({
	providedIn: 'root'
})
export class AllTodosService {
	constructor(private http: HttpClient) { }

	apiURl = 'http://localhost:3000/todos'

	/**
	 * 
	 * @returns 
	 */
	getAllTodos(): Observable<ITodos[]> {
		return this.http.get<ITodos[]>(this.apiURl)
	}

	/**
	 * 
	 * @param id 
	 * @returns 
	 */
	getTodo(id: number): Observable<ITodos> {
		return this.http.get<ITodos>(this.apiURl)
	}
	
}