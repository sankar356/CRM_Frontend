import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginEndPoint = `${environment.apiUrl}auth/user/login`;
  private loginOtpEndPoint = `${environment.apiUrl}auth/user/verifyOtp`;
  private signupEndPoint = `${environment.apiUrl}auth/user/signup`;

  constructor(
    private http:HttpClient,
  ) { }
  login(credentials?: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.loginEndPoint,credentials);
  }
  loginOtp(credentials?: { email: string; code: number}): Observable<any> {
    return this.http.post<any>(this.loginOtpEndPoint,credentials);
  }
  signUp(credentials?: { email: string; code: number}): Observable<any> {
    return this.http.post<any>(this.signupEndPoint,credentials);
  }
}
