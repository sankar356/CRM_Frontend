import { Component, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  plotOptions: any;
  legend: any;
};

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.scss'
})

export class DonutChartComponent {
  @ViewChild("chart") chart!: DonutChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43],
      plotOptions: {
        pie: {
          customScale: 0.9,
          donut: {
            size: '45%'
          }
        }
      },
      chart: {
        height: 350,
        type: "donut",
        zoom: {
          enabled: false
        }
      },
      legend: {
        position: "bottom"
      },
      labels: ["Team A", "Team B", "Team C", "Team D"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,

            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

}
