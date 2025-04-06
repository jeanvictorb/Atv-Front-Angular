import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [MenuComponent, RouterOutlet, FooterComponent, MdbCarouselModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {
} 