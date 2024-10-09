import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashbordService {
  private loginEndPoint = `${environment.apiUrl}/user`;
  // private verifyOtpEndPoint = `/api/v1/auth/user/verifyOtp`;
  // private createAccountEndPoint = `/api/v1/auth/user/signup`;
  // private forgotPasswordEndPoint = `/api/v1/auth/user/forgotPassword`;
  // private resetPasswordEndPoint = `/api/v1/auth/user/resetPassword`;

  //GetUser Module
  private getOrganizationEndPoint = `${environment.apiUrl}/organization`;

  constructor(
    private http: HttpClient,
  ) { }

  login(data: any): Observable<any> {
    return this.http.get<any>(`${this.loginEndPoint}`, data);
  }

  // otpVerify(data: any): Observable<any> {
  //   return this.http.post<any>(`${this.verifyOtpEndPoint}`, data);
  // }

  // createAccount(data: any): Observable<any> {
  //   return this.http.post<any>(`${this.createAccountEndPoint}`, data);
  // }

  // forgotPassword(data: any): Observable<any> {
  //   return this.http.post<any>(`${this.forgotPasswordEndPoint}`, data);
  // }

  // resetPassword(data: any): Observable<any> {
  //   return this.http.post<any>(`${this.resetPasswordEndPoint}`, data);
  // }

  getDataList(data ?: any): Observable<any> {
    return this.http.get<any>(`${this.getOrganizationEndPoint}`, data);
  }


}



