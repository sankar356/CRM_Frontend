import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,LayoutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navList = [""]
  naves = new LayoutComponent;
  nave = this.naves.nave
}
