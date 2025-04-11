import { Injectable } from '@angular/core';
import { Pacote } from '../models/pacote';

@Injectable({
  providedIn: 'root'
})
export class PacoteService {

  private API = 'http://localhost:8080/package';  

  constructor() { }

  findAll(): Promise<Pacote[]> {
    return fetch(this.API)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then((data) => data as Pacote[])  
      .catch((error) => {
        throw new Error(error);
      });
  }
}