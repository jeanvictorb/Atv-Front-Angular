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
  styleUrls: ['./creater.component.scss']
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
      name: this.nameCard,
      description: this.descriptionCard
    };

    fetch('http://localhost:8080/tour', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(novoPasseio) 
    })
    .then(response => response.json())
    .then(data => {
      console.log('Passeio cadastrado com sucesso:', data);
      Swal.fire('Passeio cadastrado com sucesso!', '', 'success');
      
      this.nameCard = '';
      this.descriptionCard = '';
      this.cadastroRealizado = true;

      setTimeout(() => {
        this.cadastroRealizado = false;
      }, 3000);
    })
    .catch(error => {
      console.error('Erro ao cadastrar passeio:', error);
      Swal.fire('Erro ao cadastrar passeio', '', 'error');
    });
  }
}
