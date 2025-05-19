import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import Swal from 'sweetalert2';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, MdbFormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user: User = {
    name: '',
    email: '',
    birthday: '',
    password: '',
    role: { id: 2 }
  };
  users: User[] = [];

  userService = inject(UserService);
  router = inject(Router);

  constructor() {
    this.findAll();
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const fieldName = input.getAttribute('name');
    if(fieldName) {
      (this.user as any)[fieldName] = input.value;
    }
  }

  async findAll() {
    try {
      this.users = await this.userService.findAll();
    } catch (erro) {
      Swal.fire('Erro ao buscar usuários', '', 'error');
    }
  }

private formatDateToDDMMYYYY(dateString?: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

  async createUser() {
    try {
      const userToSend = { ...this.user };
      userToSend.birthday = this.formatDateToDDMMYYYY(this.user.birthday);

      await this.userService.create(userToSend);
      this.user = { name: '', email: '', birthday: '', password: '' };
      await this.findAll();
      Swal.fire('Usuário criado com sucesso!', '', 'success');
    } catch (erro) {
      Swal.fire('Erro ao criar usuário', '', 'error');
    }
  }

  async updateUser(user: User) {
    try {
      await this.userService.update(user);
      await this.findAll();
      Swal.fire('Usuário atualizado com sucesso!', '', 'success');
    } catch (erro) {
      Swal.fire('Erro ao atualizar usuário', '', 'error');
    }
  }
}
