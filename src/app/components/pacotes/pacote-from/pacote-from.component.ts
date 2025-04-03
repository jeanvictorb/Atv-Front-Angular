import { Component } from '@angular/core';
import { CardComponent } from "../../card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pacote-from',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './pacote-from.component.html',
  styleUrl: './pacote-from.component.scss'
})
export class PacoteFromComponent {
cardpackage = [{
  titulo: 'pct 2',
  descricao: '123',
  imagem: ''
}, {
  titulo: 'Pacote 1',
  descricao: 'Pacote 1',
  imagem: '',
}, {
  titulo: 'Pacote 2',
  descricao: 'Pacote 2',
  imagem: '',

}]
}
