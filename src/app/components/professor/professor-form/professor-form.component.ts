import { Component } from '@angular/core';
import { Professor } from '../../../models/professor';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-professor-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './professor-form.component.html',
  styleUrl: './professor-form.component.scss'
})
export class ProfessorFormComponent {

  professor: Professor = new Professor();

  constructor() {
    this.professor = new Professor();
  }

  cadastrarProfessor(professor: Professor) {
    if(this.professor.nome == '' || this.professor.nome == null) {
      alert('Nome é obrigatório');
      return;
    }if(this.professor.Cpf == '' || this.professor.Cpf == null) {
      alert('CPF é obrigatório');
      return;
    }
    if(this.professor.email == '' || this.professor.email == null) {
      alert('Email é obrigatório');
      return;
    }if(this.professor.especialidade == '' || this.professor.especialidade == null) {
      alert('Especialidade é obrigatório');
      return;
    }else(
      alert('Professor salvo com sucesso')
    )
  }

  editProfessor(Professor: Professor) {
    if(this.professor.nome == '' || this.professor.nome == null) {
      alert('Nome é obrigatório');
      return;
    }if(this.professor.Cpf == '' || this.professor.Cpf == null) {
      alert('CPF é obrigatório');
      return;
    }
    if(this.professor.email == '' || this.professor.email == null) {
      alert('Email é obrigatório');
      return;
    }if(this.professor.especialidade == '' || this.professor.especialidade == null) {
      alert('Especialidade é obrigatório');
      return;
    }else(
      alert('Professor editado com sucesso')
    )
  }

  deleteProfessor(Professor: Professor) {
    alert('Professor deletado com sucesso')
  }

}
