import { Injectable } from '@angular/core';
import { Package } from '../models/pacote';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private API = 'http://localhost:8080/package';  

  constructor() { }

  findAll(): Promise<Package[]> {
    return fetch(this.API)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then((data) => data as Package[])  
      .catch((error) => {
        throw new Error(error);
      });
  }
}