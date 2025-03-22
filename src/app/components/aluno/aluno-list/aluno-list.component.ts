import { Component } from '@angular/core';
import { Aluno } from '../../../models/aluno';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.scss'
})
export class AlunoListComponent {
  
    alunos: Aluno[] = [
      {id: 1, nome: 'Pedro', Cpf: '123.456.789-00',telefone: '123456789'},
      {id: 2, nome: 'Eduarda', Cpf: '987.654.321-00',telefone: '987654321'},
      {id: 3, nome: 'Henrique', Cpf: '123.123.123-00',telefone: '123123123'},
      {id: 4, nome: 'Daniela', Cpf: '456.456.456-00',telefone: '456456456'}];
      
    constructor(){
      let aluno = new Aluno();
      aluno.id = 5;
      aluno.nome = 'João';
      aluno.Cpf = '789.789.789-00';
      aluno.telefone = '789789789';
      this.alunos.push(aluno);

      console.log(this.alunos);
    }
      
}
