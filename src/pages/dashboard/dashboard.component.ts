import { Component, inject, OnInit } from '@angular/core';
import { DonutChartComponent } from '../../shared/chart/donut-chart/donut-chart.component';
import { LineChartComponent } from '../../shared/chart/line-chart/line-chart.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { DashbordService } from '../../services/dashbord.service';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DonutChartComponent, LineChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  private http = inject(HttpClient);
  posts: any[] = [];
  coun : any[] = [];
  data : any[] = [];
  apiUrl = environment.apiUrl

  constructor(private dashboardService : DashbordService){}


  ngOnInit(): void {
    this.getcount();
    this.getLead();
  }

  getcount(): void {
      this.dashboardService.getDataList().subscribe({
        next : (res : any) => {
          console.log("dashboardService" + res)
        }
      })
    //   this.http.get('http://localhost:8000/api/v1/organization').subscribe({
    //   next: (coun: any) => {
    //     // console.log(coun);
    //     this.coun = coun;
    //   },
    //   error: (err) => {
    //     console.error('Error fetching coun:', err);
    //   }
    // });
  }

  getLead(): void {
    // this.http.get(`${environment.apiUrl}api/v1/auth/user`).subscribe({
      this.http.get('http://localhost:8000/api/v1/staffs').subscribe({
      next: (data: any) => {
        // console.log(data);
        this.data = data;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });
  }
  trackById(index: number, post: any): number {
    return post.id; 
  }
}
