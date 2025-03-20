import { Component } from '@angular/core';
import { Aluno } from '../../../models/aluno';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss'
})
export class AlunoFormComponent {

  aluno: Aluno = new Aluno();



  constructor() {
    this.aluno = new Aluno();
  }


  cadastroaluno(aluno: Aluno) {
    if(this.aluno.nome == '' || this.aluno.nome == null) {
      alert('Nome é obrigatório');
      return;
    }if(this.aluno.Cpf == '' || this.aluno.Cpf == null) {
      alert('CPF é obrigatório');
      return;
    }
    if(this.aluno.telefone == '' || this.aluno.telefone == null) {
      alert('Telefone é obrigatório');
      return;
    }else(
      alert('Aluno salvo com sucesso')
    ) 
  }

  editaluno(Aluno: Aluno) {
    if(this.aluno.nome == '' || this.aluno.nome == null) {
      alert('Nome é obrigatório');
      return;
    }if(this.aluno.Cpf == '' || this.aluno.Cpf == null) {
      alert('CPF é obrigatório');
      return;
    }
    if(this.aluno.telefone == '' || this.aluno.telefone == null) {
      alert('Telefone é obrigatório');
      return;
    }else(
      alert('Aluno editado com sucesso')
    ) 
  }

  deletealuno(Aluno: Aluno) {
    alert('Aluno deletado com sucesso')
  }
}
