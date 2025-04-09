import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-creater',
  standalone: true,
  imports: [FormsModule, MdbFormsModule, CommonModule],
  templateUrl: './creater.component.html',
  styleUrl: './creater.component.scss'
})
export class CreaterComponent {
  nameCard!: string;
  descriptionCard!: string;
  cadastroRealizado: boolean = false;

  constructor() {}

  cadastrarPasseio(): void {
    if (!this.nameCard || !this.descriptionCard) {
      Swal.fire('Preencha todos os campos', '', 'warning');
      return;
    }

    const novoPasseio = {
      nome: this.nameCard,
      descricao: this.descriptionCard,
      dataCadastro: new Date()
    };

    console.log('Passeio cadastrado:', novoPasseio);

    this.cadastroRealizado = true;

    this.nameCard = '';
    this.descriptionCard = '';

    setTimeout(() => {
      this.cadastroRealizado = false;
    }, 3000);
  }
}
