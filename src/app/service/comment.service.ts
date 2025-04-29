import { Injectable } from "@angular/core";
import { error } from "console";

@Injectable({
  providedIn: 'root'
})

export class CommentService {

    private API = 'http://localhost:8080/comments'

    constructor() {}
    
    findAll(): Promise<Comment[]>{
        return fetch(this.API)
        .then((response) =>{
            if(!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then((data) => data as Comment[])
        .catch((error) => {
            throw  new Error(error);
        })
    }

    
}
