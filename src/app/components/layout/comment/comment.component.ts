import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  nameComment!: string;
  text!: string;

  rating: number = 0;         
  hoverRating: number = 0;    

  constructor() {}
  addComment(): void {
    if (!this.nameComment || !this.text) {
      Swal.fire('Preencha todos os campos', '', 'warning');
      return;
    }
  
    const newComment = {
      name: this.nameComment,
      text: this.text,
    };
  
    fetch('http://localhost:8080/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newComment.name,
        text: newComment.text
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao adicionar comentário');
      }
      return response.json();
    })
    .then(data => {
      console.log('Comentário salvo no backend:', data);
      Swal.fire('Comentário adicionado com sucesso!', '', 'success');
      this.nameComment = '';
      this.text = '';
    })
  }
  setRating(star: number): void {
    this.rating = star;
  }
  
  setHover(star: number): void {
    this.hoverRating = star;
  }
  
  clearHover(): void {
    this.hoverRating = 0;
  }
  
}
