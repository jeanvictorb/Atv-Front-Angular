import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-creater',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creater.component.html',
  styleUrl: './creater.component.scss'
})
export class CreaterComponent {
  nameCard!: string;
  descriptionCard!: string;

  cadastroRealizado = false;

  cadastrarPasseio() {
    console.log('Passeio:', this.nameCard, this.descriptionCard);
  
    this.cadastroRealizado = true;
  
    // Esconde o alerta após 3 segundos (opcional)
    setTimeout(() => {
      this.cadastroRealizado = false;
    }, 3000);
  }
  
}
