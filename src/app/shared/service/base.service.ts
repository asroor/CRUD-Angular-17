import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ITodos } from "../interface";

@Injectable({
	providedIn: 'root',
})

export class BaseService {
	constructor(private http: HttpClient) { }

	private apiURL: string = 'http://localhost:3000/'

	private makeURL = (url: string, id?: string): string => `${this.apiURL}${url}`
	/**
	 * 
	 * @param url 
	 * @param params 
	 * @returns 
	 */
	get<T>(url: string, params?: HttpParams) {
		return this.http.get<T>(this.makeURL(url), { params })
	}
	/**
	 * 
	 * @param url 
	 * @param model 
	 * @returns 
	 */
	post<T>(url: string, model?: any) {
		return this.http.post<T>(this.makeURL(url), model)
	}

	/**
	 * 
	 * @param url 
	 * @param model 
	 * @returns 
	 */

	put<T>(url: string, model?: T) {
		return this.http.put<T>(this.makeURL(url), model)
	}
	/**
	 * 
	 * @param id 
	 * @param url 
	 * @returns 
	 */
	delate<T>(url: string) {
		return this.http.delete<T>(this.makeURL(url))
	}
}