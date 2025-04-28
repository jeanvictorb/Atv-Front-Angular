import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/users';

  // Método para buscar todos os usuários
  async findAll(): Promise<User[]> {
    const response = await fetch(this.apiUrl);
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar usuários: ${response.statusText}`);
    }
    
    return response.json();  // Retorna a lista de usuários
  }

  // Método para criar um novo usuário
  async create(user: User): Promise<User> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar usuário: ${response.statusText}`);
    }

    return response.json();  // Retorna o usuário criado
  }

  async login(email: string, senha: string): Promise<User | null> {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error(`Erro ao buscar usuários para login: ${response.statusText}`);
    }

    const users: User[] = await response.json();
    const user = users.find(u => u.email === email && u.password === senha);
    
    return user || null;
  }

  // Método para atualizar um usuário
  async update(user: User): Promise<User> {
    const response = await fetch(`${this.apiUrl}/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar usuário: ${response.statusText}`);
    }

    return response.json();  // Retorna o usuário atualizado
  }
}
