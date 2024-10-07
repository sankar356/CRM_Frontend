import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,LayoutComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  isDark : boolean = false;

  constructor(){}
  ngOnInit(): void {
    this.isDark =localStorage.getItem('theme') === 'night';
    this.applyTheme();
  }

  toggleThem(): void{
    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.isDark ? 'night' : 'nord');
    this.applyTheme();
  }
  applyTheme(): void {
    // Apply the theme using DaisyUI's theme switching
    document.documentElement.setAttribute('data-theme', this.isDark ?  'night' : 'nord');
  }
}
