// src/app/auth/auth.guard.ts
import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { LoginService } from './login.service';

/**
 * Guard para proteger rotas que requerem autenticação
 */
export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.isAuthenticated()) {
    console.log('✅ Usuário autenticado, acesso permitido');
    return true;
  }

  console.warn('❌ Usuário não autenticado, redirecionando para login');
  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};

/**
 * Guard para proteger rotas que requerem uma role específica
 * 
 * Uso no app.routes.ts:
 * {
 *   path: 'admin',
 *   component: AdminComponent,
 *   canActivate: [roleGuard],
 *   data: { roles: ['ADMIN'] }
 * }
 */
export const roleGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (!loginService.isAuthenticated()) {
    console.warn('❌ Usuário não autenticado');
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  const requiredRoles = route.data['roles'] as string[];
  
  if (!requiredRoles || requiredRoles.length === 0) {
    console.log('✅ Nenhuma role específica requerida, acesso permitido');
    return true;
  }

  if (loginService.hasAnyRole(requiredRoles)) {
    console.log('✅ Usuário possui uma das roles necessárias, acesso permitido');
    return true;
  }

  console.warn('❌ Usuário não possui as roles necessárias:', requiredRoles);
  router.navigate(['/acesso-negado']);
  return false;
};