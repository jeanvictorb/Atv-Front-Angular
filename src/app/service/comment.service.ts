// comment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommentService {

  private readonly API = 'http://localhost:8080/comments';

  constructor(private http: HttpClient) {}

  /** Busca todos os comentários */
  async findAll(): Promise<Comment[]> {
    return firstValueFrom(this.http.get<Comment[]>(this.API));
  }
}
