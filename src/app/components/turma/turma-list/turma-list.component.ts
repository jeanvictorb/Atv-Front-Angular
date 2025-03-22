import { Component } from '@angular/core';
import { Turma } from '../../../models/turma';

@Component({
  selector: 'app-turma-list',
  standalone: true,
  imports: [],
  templateUrl: './turma-list.component.html',
  styleUrl: './turma-list.component.scss'
})
export class TurmaListComponent {

  turmas: Turma[] = [
    { id: 1, nome: 'Turma A', semestre: '1º Semestre', ano: 2025, turno: 'Manhã' },
    { id: 2, nome: 'Turma B', semestre: '2º Semestre', ano: 2024, turno: 'Tarde' },
    { id: 3, nome: 'Turma C', semestre: '4º Semestre', ano: 2023, turno: 'Noite' }
  ];

  constructor(){
    let turmas = new Turma();
    this.turmas.push(turmas);
  }
}

