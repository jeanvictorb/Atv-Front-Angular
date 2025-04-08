import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourService } from '../../../service/tour.service';
import { Tour } from '../../../models/Tour';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pacote-from',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pacote-from.component.html',
  styleUrl: './pacote-from.component.scss',
})
export class PacoteFromComponent {
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
