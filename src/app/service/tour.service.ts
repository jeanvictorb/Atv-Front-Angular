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

  findById(id: number): Promise<Tour> {
    return fetch(this.API+'/'+id)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then((data) => data as Tour)  
      .catch((error) => {
        throw new Error(error);
      });
  }

  create(tour: Tour): Promise<Tour> {
    return fetch(this.API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tour)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao criar tour');
      }
      return response.json();
    })
    .then((data) => data as Tour)
    .catch((error) => {
      throw new Error(error.message);
    });
  }

  update(tour: Tour): Promise<Tour> {
    return fetch(`${this.API}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tour)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao atualizar tour');
      }
      return response.json();
    })
    .then((data) => data as Tour)
    .catch((error) => {
      throw new Error(error.message);
    });
  }

  delete(id: number): Promise<void> {
    return fetch(`${this.API}/${id}`, {
      method: 'DELETE'
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao deletar tour');
      }
    })
    .catch((error) => {
      throw new Error(error.message);
    });
  }

  
}