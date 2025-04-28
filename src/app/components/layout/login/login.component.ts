import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MdbFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  user!: string;
  password!: string;

  router = inject(Router);
  logar() {
    fetch(`http://localhost:8080/users/login?email=${this.user}&password=${this.password}`, {
      method: 'POST'
    })
    .then(async response => {
      if (response.ok) {
        const user = await response.json();
        console.log('Usuário logado:', user);
        this.router.navigate(['/principal/index']);
      } else if (response.status === 401) {
        alert('Usuário ou senha inválidos');
      } else {
        const errorText = await response.text();
        alert('Erro ao fazer login: ' + errorText);
      }
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
      alert('Erro ao conectar ao servidor');
    });
  }

}
