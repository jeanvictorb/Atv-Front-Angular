import { Injectable } from '@angular/core';
import { Tour } from '../models/Tour';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  private API = 'http://localhost:8080/tour';  

  constructor(private http: HttpClient) { }

  findAll(): Promise<Tour[]> {
    return fetch(this.API)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then((data) => data as Tour[])  
      .catch((error) => {
        throw new Error(error);
      });
  }

  findByName(nome:string): Observable<Tour>{
    return this.http.get<Tour>('${this.apiUrl}/buscar?passeio=${name}');
  }

  editarTour(tour: Tour): Observable<Tour>{
    return this.http.put<Tour>(this.API, tour);
  }
}