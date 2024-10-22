import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private getCountryEndPoint = `${environment.apiUrl}address/country`;
  private getStateEndPoint = `${environment.apiUrl}address/state`;
  private getCityEndPoint = `${environment.apiUrl}address/cities`;
  private getAddressEndPoint = `${environment.apiUrl}address`;
  private postAddressEndPoint =`${environment.apiUrl}address`;
  constructor(
    private http : HttpClient
  ) { }
  getCountry(data?: any): Observable<any> {
    return this.http.get<any[]>(`${this.getCountryEndPoint}`, { params: data });
  }
  
  getState(countryId: string): Observable<any> {
    // Convert the countryId into query params
    let params = new HttpParams().set('countryId', countryId);
    return this.http.get<any[]>(`${this.getStateEndPoint}`, { params });
  }
  
  getCity(stateId: string): Observable<any> {
    let params = new HttpParams().set('stateId', stateId);
    return this.http.get<any[]>(`${this.getCityEndPoint}`, { params });
  }
  getAddress(data?:any): Observable<any>{
    return this.http.get<any[]>(`${this.getAddressEndPoint}`,{params:data})
  }
  addAddress(data?:any):Observable<any>{
    return this.http.post<any[]>(`${this.postAddressEndPoint}`,data)
  }
}
