import { Component } from '@angular/core';
import { AreaSplineChartComponent } from '../../../shared/chart/area-split-chart/area-split-chart.component';
import { DonutChartComponent } from '../../../shared/chart/donut-chart/donut-chart.component';
import { LineChartComponent } from '../../../shared/chart/line-chart/line-chart.component';
import { LineDataChartComponent } from '../../../shared/chart/line-data-chart/line-data-chart.component';
import { StackedColumnChartComponent } from '../../../shared/chart/stacked-column-chart/stacked-column-chart.component';

@Component({
  selector: 'app-view-reports',
  standalone: true,
  imports: [AreaSplineChartComponent,DonutChartComponent,LineChartComponent,LineDataChartComponent,StackedColumnChartComponent],
  templateUrl: './view-reports.component.html',
  styleUrl: './view-reports.component.scss'
})
export class ViewReportsComponent {

}
