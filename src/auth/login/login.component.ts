import { ChangeDetectorRef, Component, ElementRef, inject, ViewChild, PLATFORM_ID, Inject, NgZone, ApplicationRef, Renderer2 } from '@angular/core';
import { AuthService } from '../authService/auth.service';
import { Router } from '@angular/router';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { first } from 'rxjs';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,HeaderComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
loginObj : Login;
public showLoginPage: boolean = true;
public showOtpVerification: boolean = false;
public showCreateAccount: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
  private alertService: AlertService

  ) {this.loginObj = new Login()}

  goToCreateAccount() {
    this.showLoginPage = false;
    this.showCreateAccount = true;
    this.showOtpVerification = false;
    // this.createNewAccount();
  }
  
   submit(){
     this.authService .login(this.loginObj).subscribe((res :any) =>{
       console.log('res',res)
       const msg = res.data.message || 'OTP sent successfully!';
       this.alertService.success(msg)
       setTimeout(() => {
         if (res) {
           this.showOtpVerificationForm();
         }
       },-2000); 
     },
    )
   //  console.log("submitting")
 //  this.router.navigateByUrl('dashboard');
   }
   createNewAccount(){
    this.authService .signUp(this.loginObj).subscribe((res :any) =>{
      console.log('res',res)
      const msg = res.data.message || 'OTP sent successfully!';
      this.alertService.success(msg)
      setTimeout(() => {
        if (res) {
          this.showOtpVerificationForm();
        }
      },-2000); 
    },
   )
  }
   showOtpVerificationForm() {
    this.showLoginPage = false;
    this.showOtpVerification = true;
    this.showCreateAccount = false;
    if (this.showOtpVerification) {
      // this.submitOtp()
    }
  }
   submitOtp(){
    this.authService.loginOtp(this.loginObj).subscribe((res:any) =>{
      this.router.navigateByUrl('dashboard')
    })
   }
  
  }


export class Login{
  email :string;
  password : string;
  code : number;
  firstName:string;
  lastName:string;
  phoneNumber:string;
  constructor(){
    this.email = '';
    this.password ='';
    this.code = 0;
    this.firstName='';
    this.lastName = '';
    this.phoneNumber = '';
  }
}
