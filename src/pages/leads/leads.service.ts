import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lead } from './leads.component';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {
  private getGetLeadEndPoint = `${environment.apiUrl}leads`
  private postGetLeadEndPoint = `${environment.apiUrl}leads`
  private getLeadByIdEndPoint = `${environment.apiUrl}leads`
  private updateLeadEndPoint = `${environment.apiUrl}leads`
  
  private getStaffEndPoint = `${environment.apiUrl}staffs`
  private getCountryEndPoint = `${environment.apiUrl}address/country`


  private getLeadSourceEndPoint = `${environment.apiUrl}leadsoure`
  private getLeadStatusEndPoint = `${environment.apiUrl}leadstatus`
  constructor(
    private http :HttpClient,
  ) { }
  getLead(lead?:any): Observable<any>{
    return this.http.get<any[]>(`${this.getGetLeadEndPoint}`,{params:lead})
  }
  addLead(lead?:Lead):Observable<any>{
    return this.http.post<any[]>(`${this.postGetLeadEndPoint}`,lead)
  }
  getLeadById(id: number): Observable<Lead> {
    return this.http.get<Lead>(`${this.getLeadByIdEndPoint}${id}/`);
  }
  updateLead(data: any, leadId: any): Observable<any> {
    return this.http.put<any>(`${this.updateLeadEndPoint}` + leadId, data);
  }
  getStaff() {
    return this.http.get<any>(this.getStaffEndPoint);
  }
  getCountry() {
    return this.http.get<any>(this.getCountryEndPoint);
  }
  getLeadSource() {
    return this.http.get<any>(this.getLeadSourceEndPoint);
  }

  getLeadStatus() {
    return this.http.get<any>(this.getLeadStatusEndPoint);
  }
}
