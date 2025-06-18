import { Component, inject } from '@angular/core';
import { PackageService } from '../../service/package.service';
import Swal from 'sweetalert2';
import { Package } from '../../models/pacote';
import { CommonModule } from '@angular/common';
import { Pagina } from '../../models/pagina';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-package',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule],
  templateUrl: './package.component.html',
  styleUrl: './package.component.scss',
  styles: [
    `
      :host {
        display: flex;
      }
    `,
  ],
})
export class PackageComponent {
  lista: Package[] = [];
  pagina: Pagina<Package> = new Pagina<Package>();
  numPaginaAtual: number = 1;

  pacoteService = inject(PackageService);

  constructor() {
    this.findAll();
  }

  findAll() {
    this.pacoteService.findAllPaginado(this.numPaginaAtual).subscribe({
      next: (paginaRetornada) => {
        this.pagina = paginaRetornada;
        this.lista = paginaRetornada.content.map((t) => ({
          ...t,
          liked: false,
        }));
      },
      error: (erro) => {
        Swal.fire(erro.message || 'Erro ao carregar pacotes', '', 'error');
      },
    });
  }

  trocarPagina(pagina: number) {
    this.numPaginaAtual = pagina;
    this.findAll();
  }

  toggleLike(index: number): void {
    this.lista[index].liked = !this.lista[index].liked;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
