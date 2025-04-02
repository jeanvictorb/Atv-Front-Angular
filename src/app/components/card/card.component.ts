import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() imagem: string = '';
  @Input() link: string = '';
}
