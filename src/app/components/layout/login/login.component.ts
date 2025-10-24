import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Router } from '@angular/router';
import { Login } from '../../../auth/login';
// Importamos o LoginService e também a interface TokenResponse para tipagem
import { LoginService, TokenResponse } from '../../../auth/login.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MdbFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  // Nota: Não é estritamente necessário declarar user e password aqui se o `login` for a fonte de dados
  user!: string;
  password!: string;

  login: Login = new Login();

  router = inject(Router);
  loginService = inject(LoginService);

  constructor(){
    // Garante que o usuário sempre comece sem token ao carregar a página de login
    this.loginService.removerToken();
  }

  logar() {
    this.loginService.logar(this.login).subscribe({
      next: (response: TokenResponse) => {
        if(response && response.access_token)
          this.loginService.addToken(response); 
          
        this.gerarToast().fire({ icon: "success", title: "Seja bem-vindo!" });
        this.router.navigate(['principal/']);
      },
      error: erro => {
        // Este bloco continua tratando o erro 401 do backend (Usuário ou senha incorretos)
        Swal.fire('Usuário ou senha incorretos!', '', 'error');
      }
    });
  }

  gerarToast() {
    return Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
  }
}