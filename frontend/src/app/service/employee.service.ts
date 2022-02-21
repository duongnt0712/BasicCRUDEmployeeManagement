import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../entity/employee';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private baseURL = 'http://localhost:8080/employee';
    // private baseURL = 'https://imouto-api.herokuapp.com/employee';

    constructor(private httpClient: HttpClient) { }

    getEmployeeList(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>(`${this.baseURL}`);
    }

    getEmployeeListPage(id: number, maxPerPage: number): Observable<any> {
        return this.httpClient.get<Employee[]>(`${this.baseURL}/pages/${id}?maxPerPage=${maxPerPage}`);
    }

    getEmployeeById(id: number): Observable<Employee> {
        return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
    }

    createEmployee(employee: Object): Observable<Object> {
        return this.httpClient.post(`${this.baseURL}`, employee, { responseType: 'text'});
    }

    updateEmployee(id: number, employee: Employee): Observable<Object> {
        return this.httpClient.put(`${this.baseURL}/${id}`, employee, { responseType: 'text'});
    }

    deleteEmployee(id: number): Observable<Object> {
        return this.httpClient.delete(`${this.baseURL}?id=${id}`, { responseType: 'text'})
    }
}
