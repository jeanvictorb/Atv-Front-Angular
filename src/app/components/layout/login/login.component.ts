import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MdbFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  login = {
    Username: '',
    Password: '',
  };
  constructor() {}

  logar() {
    if (this.login.Username == 'admin' && this.login.Password == 'admin') {
      alert('Logado com sucesso');
    } else {
      alert('Usuário ou senha inválidos');
    }
  }
}
