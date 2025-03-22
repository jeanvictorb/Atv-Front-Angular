import { Component } from '@angular/core';
import { Turma } from '../../../models/turma';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-turma-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './turma-form.component.html',
  styleUrl: './turma-form.component.scss'
})
export class TurmaFormComponent {

  turma: Turma = new Turma();
  
  Cadastroturma(turma: Turma){
    if (this.turma.nome == '' || this.turma.nome == null) {
      alert('Nome é obrigatório');
      return;
    } if (this.turma.semestre == '' || this.turma.semestre == null) {
      alert('Semestre é obrigatório');
      return;
    }
    if (this.turma.ano == null) {
      alert('Ano é obrigatório');
      return;
    } if (this.turma.turno == '' || this.turma.turno == null) {
      alert("Turno é obrigatório");
      return;
    } else {
      alert('Turma salvo com sucesso');
    }
  }

  deleteturma(turma: Turma) {
    alert("turma deletada");
  }
}
