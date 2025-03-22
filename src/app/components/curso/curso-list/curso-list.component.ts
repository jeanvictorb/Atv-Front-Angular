import { Component } from '@angular/core';
import { Curso } from '../../../models/curso';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-curso-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './curso-list.component.html',
  styleUrl: './curso-list.component.scss'
})
export class CursoListComponent {
  curso: Curso= new Curso();
  cursos: Curso[] = [
    { id: 1, nome: 'Matemática' },
    { id: 2, nome: 'Português' },
    { id: 3, nome: 'História' },
    { id: 4, nome: 'Geografia' },
    { id: 5, nome: 'Ciências' },
    { id: 6, nome: 'Inglês' },
    { id: 7, nome: 'Educação Física' }
  ];
  cadastrarCurso() {
    if (!this.curso.nome) {
      alert('Nome do curso é obrigatório');
      return;
    }
    
    this.curso.id = this.cursos.length + 1;
    this.cursos.push(this.curso);
    this.curso = new Curso();
    alert('Curso cadastrado com sucesso!');
  }

  excluirCurso(nome: string) {
    this.cursos = this.cursos.filter(curso => curso.nome !== nome);

  }

  }
