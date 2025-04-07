import { Injectable } from '@angular/core';
import { Tour } from '../models/Tour';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  private API = 'http://localhost:8080/tour';  

  constructor() { }

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
}