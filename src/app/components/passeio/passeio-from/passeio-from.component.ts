import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { MenuComponent } from '../../layout/menu/menu.component';
import { CommonModule } from '@angular/common';
import { style } from '@angular/animations';

@Component({
  selector: 'app-passeio-from',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './passeio-from.component.html',
  styleUrl: './passeio-from.component.scss',
})
export class PasseioFromComponent {
  cardList = [
    {
      titulo: 'Parque das aves',
      descricao:
        'Santuário de conservação com mais de 1.300 aves de 140 espécies. Os visitantes podem entrar em viveiros imersivos e ver de perto araras, tucanos e outras aves tropicais.',
      imagem: 'assets/img/bird_park.jpg',
    },
    {
      titulo: 'Cataratas',
      descricao:
        'Um dos maiores espetáculos naturais do mundo, com 275 quedas d’água, incluindo a impressionante Garganta do Diabo. Localizadas no Parque Nacional do Iguaçu, oferecem trilhas, mirantes e passeios de barco.',
      imagem: 'assets/img/cataratas.jpg',
    },
    {
      titulo: 'Marco das três fronteiras',
      descricao:
        'Ponto de encontro entre Brasil, Argentina e Paraguai, com vista panorâmica dos três países. O local conta com apresentações culturais, gastronomia regional e um belo pôr do sol.',
      imagem: 'assets/img/marco_tres.jpg',
    },
  ];
}
