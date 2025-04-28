import { Component } from '@angular/core';
import { CarrosselComponent } from "../carrossel/carrossel.component";
import { IndexComponent } from "../index/index.component";
import { CommentComponent } from "../comment/comment.component";
import { FooterComponent } from "../footer/footer.component";
import { MenuComponent } from "../menu/menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal-user',
  standalone: true,
  imports: [CarrosselComponent, CommentComponent, FooterComponent, MenuComponent, RouterOutlet],
  templateUrl: './principal-user.component.html',
  styleUrl: './principal-user.component.scss'
})
export class PrincipalUserComponent {

}
