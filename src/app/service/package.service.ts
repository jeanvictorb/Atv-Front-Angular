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

    findById(id: number): Promise<Package> {
      return fetch(this.API+'/'+id)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erro na requisição');
          }
          return response.json();
        })
        .then((data) => data as Package)  
        .catch((error) => {
          throw new Error(error);
        });
    }

     create(pack: Package): Promise<Package> {
        return fetch(this.API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(pack)
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erro ao criar package');
          }
          return response.json();
        })
        .then((data) => data as Package)
        .catch((error) => {
          throw new Error(error.message);
        });
      }
    
      update(pack: Package): Promise<Package> {
        return fetch(`${this.API}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(pack)
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erro ao atualizar package');
          }
          return response.json();
        })
        .then((data) => data as Package)
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
            throw new Error('Erro ao deletar package');
          }
        })
        .catch((error) => {
          throw new Error(error.message);
        });
      }
}