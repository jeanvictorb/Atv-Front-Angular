import { Component, inject } from '@angular/core';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { LoginService } from '../../../auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MdbCollapseModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  showAdm: boolean = false;
  showUser: boolean = false;

  private router = inject(Router);

  constructor() {
    let loginService = inject(LoginService);
    this.checkLogIn(loginService);
  }

  checkLogIn(loginService: LoginService) {
    if (loginService.hasRole('1')) this.showAdm = true;
    if (loginService.hasRole('1') || loginService.hasRole('2') || loginService.hasRole('3')) this.showUser = true;
  }

  // Funções para navegação
  goToPacotes() {
    this.router.navigate(['principal/package']);
  }

  goToPasseios() {
    this.router.navigate(['principal/tour']);
  }

  goToCriarUsuario() {
    this.router.navigate(['principal/user']);
  }

  goToCriarPacote() {
    this.router.navigate(['principal/packagecreater']);
  }

  goToCriarPasseio() {
    this.router.navigate(['/principal/creater']);
  }

}
