

import { ChangeDetectorRef, Component, ElementRef, inject, ViewChild, PLATFORM_ID, Inject, NgZone, ApplicationRef, Renderer2 } from '@angular/core';
import { AuthService } from '../authService/auth.service';
import { Router } from '@angular/router';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { isPlatformBrowser } from '@angular/common';
import { first } from 'rxjs';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  @ViewChild('characterCanvas', { static: true })
  private characterCanvas!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private modelLoaded = false; 
  private fbxModel!: THREE.Object3D;
  private mixer: THREE.AnimationMixer | null = null; // Declare mixer property

  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone,
    private changeDetectorRef: ChangeDetectorRef,
    
    private renderers: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}


  ngOnInit() {

  }


  submit() {
   console.log("submitting")
 this.router.navigateByUrl('mainroute');
  }
}