// comment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CommentService {

  private readonly API = environment.SERVIDOR+'/comments';

  constructor(private http: HttpClient) {}

  async findAll(): Promise<Comment[]> {
    return firstValueFrom(this.http.get<Comment[]>(this.API));
  }
}
