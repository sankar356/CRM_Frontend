import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrlTasks = environment.apiUrl; 
  
  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get<any>(this.apiUrlTasks);
  }

  getTaskById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlTasks}/${id}`);
  }

  deleteTask(taskId: any): Observable<any> {
    return this.http.delete(`${this.apiUrlTasks}/${taskId}`); 
  }

  addTask(task: any): Observable<any> {
    return this.http.post(this.apiUrlTasks, task);
  }

  updateTask(taskId: any, updatedTask: any): Observable<any> {
    return this.http.put(`${this.apiUrlTasks}/${taskId}`, updatedTask);
  }
}
