import { Component } from '@angular/core';
import { DonutChartComponent } from '../../shared/chart/donut-chart/donut-chart.component';
import { LineChartComponent } from '../../shared/chart/line-chart/line-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DonutChartComponent,LineChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
