import { CommonModule } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,LayoutComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  isDark : boolean = false;
  @Input() page :any;
  breadcrumbs: Array<{ label: string, url: string }> = [];
  constructor(private router :Router,
    private route :ActivatedRoute
  ){}
  ngOnInit(): void {
    
    this.isDark =localStorage.getItem('theme') === 'night';
    this.applyTheme();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.buildBreadcrumb(this.route.root);
    });
    
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
  private buildBreadcrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Array<{ label: string, url: string }> = []): Array<{ label: string, url: string }> {
    const children: ActivatedRoute[] = route.children;
  
    if (children.length === 0) {
      this.breadcrumbs = breadcrumbs;
      return breadcrumbs; // This ensures a value is returned
    }
  
    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }
  
      const label = child.snapshot.data['breadcrumb'];
      if (label) {
        breadcrumbs.push({ label, url });
      }
  
      return this.buildBreadcrumb(child, url, breadcrumbs); // Recursively returning the value
    }
  
    return breadcrumbs; // Default return statement to handle any missing return path
  }
  
}
