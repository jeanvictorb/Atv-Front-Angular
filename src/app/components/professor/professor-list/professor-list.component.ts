import { Component } from '@angular/core';
import { Professor } from '../../../models/professor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professor-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './professor-list.component.html',
  styleUrl: './professor-list.component.scss'
})
export class ProfessorListComponent {

  professores: Professor[] = [
    {id: 1, nome: 'João', Cpf: '123.456.789-00', email: 'joao123@gmail.com', especialidade: 'Matemática'},
    {id: 2, nome: 'Maria', Cpf: '987.654.321-00', email: 'maria456@gmail.com', especialidade: 'História'},
    {id: 3, nome: 'José', Cpf: '123.123.123-00', email: 'jose789@gmail.com', especialidade: 'Física'},
    {id: 4, nome: 'Ana', Cpf: '456.456.456-00', email:  'ana123@gmail.com', especialidade: 'Química'},
    {id: 5, nome: 'Carlos', Cpf: '789.789.789-00', email: 'carlos456@gmail.com', especialidade: 'Biologia'}
  ];

  constructor() { 
    let professor = new Professor();
    professor.id = 6;
    professor.nome = 'Pedro';
    professor.Cpf = '987.654.321-00';
    professor.email = 'pedro789@gmail.com';
    professor.especialidade = 'Geografia';
    this.professores.push(professor);
    

    console.log(this.professores);
  }

  
}
