import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';

export const guardGuard: CanActivateFn = (route, state) => {
  let loginService = inject(LoginService);
  let roteador = inject(Router);

  if (state.url == '/principal/user' && !loginService.hasRole('1')) {
    roteador.navigate(['/principal/tour']);
    return false;
  }

  if (state.url.startsWith('/principal')) {
    if (loginService.hasRole('1') || loginService.hasRole('2') || loginService.hasRole('3')) {
      return true;
    }
    roteador.navigate(['/login']);
    return false;
  }

  return true;
};
