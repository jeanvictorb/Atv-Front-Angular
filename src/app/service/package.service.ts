import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { Package } from '../models/pacote';
import { environment } from '../../environments/environment';
import { Pagina } from '../models/pagina';

@Injectable({ providedIn: 'root' })
export class PackageService {
  private readonly API = environment.SERVIDOR + '/package';

  constructor(private http: HttpClient) {}

  /** Busca todos os packages */
  async findAll(): Promise<Package[]> {
    return firstValueFrom(this.http.get<Package[]>(this.API));
  }

  /** Busca um package por id */
  async findById(id: number): Promise<Package> {
    return firstValueFrom(this.http.get<Package>(`${this.API}/${id}`));
  }

  /** Cria um novo package */
  async create(pack: Package): Promise<Package> {
    return firstValueFrom(this.http.post<Package>(this.API, pack));
  }

  /** Atualiza um package */
  async update(pack: Package): Promise<Package> {
    return firstValueFrom(this.http.put<Package>(this.API, pack));
  }

  /** Deleta um package */
  async delete(id: number): Promise<void> {
    return firstValueFrom(this.http.delete<void>(`${this.API}/${id}`));
  }

  /** Busca os packages de forma paginada */
  findAllPaginado(numPaginaAtual: number): Observable<Pagina<Package>> {
    return this.http.get<Pagina<Package>>(
      `${this.API}/findAll/${numPaginaAtual}`
    );
  }
}
