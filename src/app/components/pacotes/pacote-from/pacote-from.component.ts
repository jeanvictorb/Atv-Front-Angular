import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Pacote } from '../../../models/pacote';
import { PacoteService } from '../../../service/pacote.service';

@Component({
  selector: 'app-pacote-from',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pacote-from.component.html',
  styleUrl: './pacote-from.component.scss',
  styles: [
    `
      :host {
        display: flex;
      }
    `
  ]
  
})
export class PacoteFromComponent {
  lista: Pacote[] = [];

  pacoteService = inject(PacoteService);

  constructor() {
    this.findAll();
  }

  findAll() {
    this.pacoteService.findAll()
      .then((listaRetornada) => {
        this.lista = listaRetornada.map(t => ({ ...t, liked: false }));
      })
      .catch((erro) => {
        Swal.fire(erro.message || 'Erro desconhecido', '', 'error');
      });
  }

  toggleLike(index: number): void {
    this.lista[index].liked = !this.lista[index].liked;
  }

  trackByIndex(index: number): number {
    return index;
  }
}

