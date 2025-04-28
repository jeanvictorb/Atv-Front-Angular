import { Component, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Tour } from '../../models/Tour';
import { TourService } from '../../service/tour.service';

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.scss',
  styles: [
    `
      :host {
        display: flex;
      }
    `
  ]
})
export class TourComponent {
lista: Tour[] = [];

  tourService = inject(TourService);

  constructor() {
    this.findAll();
  }

  findAll() {
    this.tourService.findAll()
      .then((listaRetornada) => {
        this.lista = listaRetornada;
      })
      .catch((erro) => {
        Swal.fire(erro.message || 'Erro desconhecido', '', 'error');
      });
  }
}



