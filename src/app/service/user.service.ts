// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';      
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {

  private readonly apiUrl = environment.SERVIDOR+'/users';
  

  constructor(private http: HttpClient) { }

  /** Busca todos os usuários */
  async findAll(): Promise<User[]> {
    return firstValueFrom(this.http.get<User[]>(this.apiUrl));
  }

  /** Cria um novo usuário */
  async create(user: User): Promise<User> {
    return firstValueFrom(this.http.post<User>(this.apiUrl, user));
  }

  /** Login simples (exemplo) */
  async login(email: string, senha: string): Promise<User | null> {
    const users = await this.findAll();                      // reaproveita o método acima
    return users.find(u => u.email === email && u.password === senha) ?? null;
  }

  /** Atualiza um usuário */
  async update(user: User): Promise<User> {
    return firstValueFrom(this.http.put<User>(`${this.apiUrl}/${user.id}`, user));
  }
}
