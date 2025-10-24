// src/app/auth/login.service.ts
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { Login } from './login';
import { User } from '../models/user';

/**
 * Interface para o formato de resposta do token do Keycloak
 */
export interface TokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
  token_type: string;
  scope?: string;
  session_state?: string;
  'not-before-policy'?: number;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);
  private readonly API = 'http://localhost:8081/token';
  private readonly TOKEN_KEY = 'access_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';

  constructor() {}

  /**
   * Obtém o token de acesso do localStorage
   */
  getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }

  /**
   * Obtém o refresh token do localStorage
   */
  getRefreshToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(this.REFRESH_TOKEN_KEY);
    }
    return null;
  }

  /**
   * Salva os tokens no localStorage
   */
  addToken(response: TokenResponse): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(this.TOKEN_KEY, response.access_token);
      if (response.refresh_token) {
        localStorage.setItem(this.REFRESH_TOKEN_KEY, response.refresh_token);
      }
    }
  }

  /**
   * Remove os tokens do localStorage
   */
  removerToken(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    }
  }

  /**
   * Faz login e retorna o token
   */
  logar(login: Login): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(this.API, login).pipe(
      tap(response => {
        // Salva o token automaticamente após login bem-sucedido
        this.addToken(response);
        console.log('✅ Login realizado com sucesso!');
        console.log('👤 Usuário:', this.getUsuarioLogado()?.preferred_username);
        console.log('🎭 Roles:', this.getRoles());
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Decodifica o JWT e retorna o payload
   */
  jwtDecode(): User | null {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode<User>(token);
      } catch (error) {
        console.error('❌ Erro ao decodificar token:', error);
        return null;
      }
    }
    return null;
  }

  /**
   * Verifica se o usuário tem uma role específica
   */
  hasRole(role: string): boolean {
    const user = this.jwtDecode();
    if (!user || !user.realm_access?.roles) {
      return false;
    }
    
    // Verifica se a role existe no array (case-insensitive)
    const roles = user.realm_access.roles.map(r => r.toUpperCase());
    return roles.includes(role.toUpperCase());
  }

  /**
   * Verifica se o usuário tem pelo menos uma das roles fornecidas
   */
  hasAnyRole(roles: string[]): boolean {
    return roles.some(role => this.hasRole(role));
  }

  /**
   * Verifica se o usuário tem todas as roles fornecidas
   */
  hasAllRoles(roles: string[]): boolean {
    return roles.every(role => this.hasRole(role));
  }

  /**
   * Retorna todas as roles do usuário
   */
  getRoles(): string[] {
    const user = this.jwtDecode();
    return user?.realm_access?.roles || [];
  }

  /**
   * Verifica se o usuário está autenticado (token válido e não expirado)
   */
  isAuthenticated(): boolean {
    const user = this.jwtDecode();
    if (!user || !user.exp) {
      return false;
    }
    
    // Verifica se o token não está expirado
    const now = Math.floor(Date.now() / 1000);
    return user.exp > now;
  }

  /**
   * Retorna o usuário logado
   */
  getUsuarioLogado(): User | null {
    return this.jwtDecode();
  }

  /**
   * Retorna o nome de usuário preferido
   */
  getUsername(): string | null {
    const user = this.jwtDecode();
    return user?.preferred_username || null;
  }

  /**
   * Retorna o email do usuário
   */
  getEmail(): string | null {
    const user = this.jwtDecode();
    return user?.email || null;
  }

  /**
   * Retorna o nome completo do usuário
   */
  getFullName(): string | null {
    const user = this.jwtDecode();
    if (user?.name) {
      return user.name;
    }
    if (user?.given_name && user?.family_name) {
      return `${user.given_name} ${user.family_name}`;
    }
    return user?.given_name || user?.family_name || null;
  }

  /**
   * Faz logout removendo os tokens
   */
  logout(): void {
    this.removerToken();
    console.log('👋 Logout realizado com sucesso!');
  }

  /**
   * Tratamento de erros
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ocorreu um erro desconhecido!';
    
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // Erro do lado do servidor
      if (error.status === 401) {
        errorMessage = 'Credenciais inválidas. Verifique seu usuário e senha.';
      } else if (error.status === 500) {
        errorMessage = 'Erro no servidor. Tente novamente mais tarde.';
      } else {
        errorMessage = `Erro ${error.status}: ${error.message}`;
      }
    }
    
    console.error('❌ Erro no login:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}