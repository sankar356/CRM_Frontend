import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff } from './staffs.component';

@Injectable({
  providedIn: 'root'
})
export class StaffsService {
  private staffGetEndPoint = `${environment.apiUrl}staffs`
  constructor(
    private http :HttpClient,
  ) { }
  getStaff(staff?:Staff): Observable<any>{
    return this.http.get<any[]>(`${this.staffGetEndPoint}`)
  }
}
