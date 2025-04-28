import { Component } from '@angular/core';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

@Component({
  selector: 'app-menu-user',
  standalone: true,
  imports: [MdbCollapseModule],
  templateUrl: './menu-user.component.html',
  styleUrl: './menu-user.component.scss'
})
export class MenuUserComponent {

}
