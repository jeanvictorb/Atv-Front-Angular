import { Component } from '@angular/core';
import { TourService } from '../../../service/tour.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [NgModel, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
 
    nomeBusca: string = '';
    passeio: any = { nome: '', descricao: '' };
    passeioEncontrado: boolean = false;
    edicaoSucesso: boolean = false;
  
    constructor(private tourService: TourService){}
  
    buscarPasseio() {
      this.tourService.findByName(this.nomeBusca).subscribe({
        next: (data) => {
          this.passeio = data;
          this.passeioEncontrado = true;
        },
        error: () => {z
          alert('Passeio não encontrado!');
          this.passeioEncontrado = false;
        }
      });
    }
  
    salvarPasseio() {
      this.tourService.editarTour(this.passeio).subscribe({
        next: () => {
          this.edicaoSucesso = true;
          setTimeout(() => {
            this.edicaoSucesso = false;
          }, 3000);
        },
        error: () => {
          alert('Erro ao salvar passeio.');
        }
      });
    }
  
  
}
