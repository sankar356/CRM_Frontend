import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidrbar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './sidrbar.component.html',
  styleUrl: './sidrbar.component.scss'
})
export class SidrbarComponent {
  @ViewChild('characterCanvas',{static:true})
  private characterCanvas!: ElementRef;
  // navList = [""]
constructor(
  private router: Router
){
}
  mclick() {
    console.log("")
   }
}
