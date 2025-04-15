import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import Swal from 'sweetalert2';
import { TourService } from '../../../service/tour.service';
import { Tour } from '../../../models/Tour';

@Component({
  selector: 'app-creater',
  standalone: true,
  imports: [FormsModule, MdbFormsModule, CommonModule],
  templateUrl: './creater.component.html',
  styleUrls: ['./creater.component.scss']
})
export class CreaterComponent {

  tour: Tour = {
    name: "",
    description: ""
  };
  nameCard!: string;
  descriptionCard!: string;
  rotaAtivida = inject(ActivatedRoute);
  tourService = inject(TourService);
  router = inject(Router);

  constructor() {
    let id = this.rotaAtivida.snapshot.params['id'];
    if(id){
      this.findById(id);
    }
  }

  findById(id: number){
    this.tourService.findById(id)
    .then((tour: Tour) => {
      this.tour = tour;
    })
    .catch((erro) => {
      Swal.fire(erro?.message, '', 'error');
      
    });
  }

  createTour() {
    this.tourService.create(this.tour)
      .then(() => {
        this.tour = {
          name: "",
          description: ""
        };
        Swal.fire('Tour criado com sucesso!', '', 'success');
      })
      .catch((erro) => {
        Swal.fire(erro?.message, '', 'error');
      });
  }

  updateTour() {
    if (this.tour.id !== null) {
      this.tourService.update(this.tour)
        .then(() => {
          Swal.fire('Tour atualizado com sucesso!', '', 'success');
        })
        .catch((erro) => {
          Swal.fire(erro?.message, '', 'error');
        });
    }
  }

  deleteTour() {
    if (this.tour.id !== null) {
      this.tourService.delete(Number(this.tour.id))
        .then(() => {
          Swal.fire('Tour deletado com sucesso!', '', 'success');
          this.router.navigate(['/principal/creater']);
        })
        .catch((erro) => {
          Swal.fire(erro?.message, '', 'error');
        });
    }
  }
}
