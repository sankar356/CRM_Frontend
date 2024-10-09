import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 private getTaskEndPoint =`${environment.apiUrl}/task`;
  constructor(
    private http :HttpClient,
  ) { }
  getTask(data ?:any): Observable<any>{
    return this.http.get<any>(`${this.getTaskEndPoint}`,data);
  }
}
