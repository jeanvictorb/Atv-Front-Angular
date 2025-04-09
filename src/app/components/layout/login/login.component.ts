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
    if (this.user == 'admin' && this.password == 'admin') {
    this.router.navigate(['/principal/index']);
    } else {
      alert('Usuário ou senha inválidos');
    }
  }

}
