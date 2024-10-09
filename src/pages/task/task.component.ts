import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit{
  data :any[] = [];
  apiUrl = environment.apiUrl
  constructor(
    private taskService : TaskService
  ){}
  ngOnInit(): void {
      this.getTask()
  }
  getTask(): void{
    this.taskService.getTask().subscribe({
      next :(res:any) =>{
        console.log("task"+res)
      }
    })
  }
}
