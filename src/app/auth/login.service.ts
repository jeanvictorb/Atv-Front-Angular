import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { Login } from './login';
import { User } from '../models/user';

// 1. Interface para o formato de resposta do token (Keycloak/OAuth2)
export interface TokenResponse {
  access_token: string; // O token JWT propriamente dito
  expires_in: number;
  refresh_token: string;
  token_type: string;
  // Outros campos como 'scope', 'session_state', etc., podem ser adicionados
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http = inject(HttpClient);
  // O endpoint de login no Spring Boot é http://localhost:8081/token
  API = 'http://localhost:8081/token';

  constructor() {}

  getToken() {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('token');
    }
    return null;
  }

  // 2. addToken agora recebe a resposta completa e armazena APENAS o access_token
  addToken(response: TokenResponse) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('token', response.access_token);
      // Opcional: Armazenar o refresh_token para renovação de sessão
      // localStorage.setItem('refresh_token', response.refresh_token);
    }
  }

  removerToken() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('token');
      // Opcional: Remover o refresh_token também
      // localStorage.removeItem('refresh_token');
    }
  }

  // 3. logar() agora espera um Observable<TokenResponse> (JSON)
  logar(login: Login): Observable<TokenResponse> {
    // A remoção de `responseType: 'text' as 'json'` faz o HttpClient esperar JSON por padrão,
    // garantindo que ele lide com a resposta padrão do OAuth2.
    return this.http.post<TokenResponse>(this.API, login);
  }

  jwtDecode() {
    let token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);
    }
    return '';
  }

  hasRole(role: string) {
    let user = this.jwtDecode() as User;
    // Ajuste: Dependendo de como você configura o mapeamento do JWT para `User`,
    // o campo de permissões/roles pode se chamar `roles`, `scope`, ou outro.
    // Preservando `roleId` conforme seu código original:
    if (user.roleId == role) return true;
    else return false;
  }
  
  getUsuarioLogado() {
    return this.jwtDecode() as User;
  }
}