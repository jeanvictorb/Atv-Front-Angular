// tour.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Tour } from '../models/Tour';

@Injectable({ providedIn: 'root' })
export class TourService {

  private readonly API = 'http://localhost:8080/tour';

  constructor(private http: HttpClient) { }

  /** Busca todos os tours */
  async findAll(): Promise<Tour[]> {
    return firstValueFrom(this.http.get<Tour[]>(this.API));
  }

  /** Busca um tour por id */
  async findById(id: number): Promise<Tour> {
    return firstValueFrom(this.http.get<Tour>(`${this.API}/${id}`));
  }

  /** Cria um novo tour */
  async create(tour: Tour): Promise<Tour> {
    return firstValueFrom(this.http.post<Tour>(this.API, tour));
  }

  /** Atualiza um tour */
  async update(tour: Tour): Promise<Tour> {
    return firstValueFrom(this.http.put<Tour>(this.API, tour));
  }

  /** Deleta um tour */
  async delete(id: number): Promise<void> {
    return firstValueFrom(this.http.delete<void>(`${this.API}/${id}`));
  }
}
