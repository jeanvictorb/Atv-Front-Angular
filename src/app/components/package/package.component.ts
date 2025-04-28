import { Component, inject } from '@angular/core';
import { PackageService } from '../../service/package.service';
import Swal from 'sweetalert2';
import { Package } from '../../models/pacote';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-package',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './package.component.html',
  styleUrl: './package.component.scss',
  styles: [
    `
      :host {
        display: flex;
      }
    `
  ]
})
export class PackageComponent {
lista: Package[] = [];

  pacoteService = inject(PackageService);

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
