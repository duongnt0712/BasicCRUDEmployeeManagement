import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Training } from '../entity/training';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TrainingService {

    private baseURL = 'http://localhost:8080/training';
    // private baseURL = 'https://imouto-api.herokuapp.com/training';

    constructor(private httpClient: HttpClient) { }

    getTrainingList(): Observable<Training[]> {
        return this.httpClient.get<Training[]>(`${this.baseURL}`);
    }

    getTrainingListByPage(id: number, maxPerPage: number): Observable<any> {
        return this.httpClient.get<Training[]>(`${this.baseURL}/pages/${id}?maxPerPage=${maxPerPage}`);
    }

    getTrainingListByName(name: string): Observable<Training[]> {
        return this.httpClient.get<Training[]>(`${this.baseURL}/search?keyword=${name}`);
    }

    getTrainingById(id: number): Observable<Training> {
        return this.httpClient.get<Training>(`${this.baseURL}/${id}`);
    }

    createTraining(training: Training): Observable<Object> {
        return this.httpClient.post(`${this.baseURL}`, training, { responseType:'text'});
    }

    updateTraining(id: number, training: Training): Observable<Object> {
        return this.httpClient.put(`${this.baseURL}/${id}`, training, {responseType : 'text'});
    }

    deleteTraining(id: number): Observable<Object> {
        return this.httpClient.delete(`${this.baseURL}/${id}`, { responseType:'text'});
    }
}
