import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})

export class LineChartComponent {
  constructor() {}
  title = 'users';
  ngOnInit() {
    var myChart = new Chart('myChartLine', {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],  // CRM-related months
        datasets: [
          {
            label: 'Leads Generated',   // Number of leads each month
            data: [150, 200, 180, 220, 250, 300],
            backgroundColor: '#5e81ac',  // Light blue accent
            borderColor: '#5e81ac',
            borderWidth: 5,
          },
          {
            label: 'Conversions',  // Number of conversions from leads
            data: [50, 60, 80, 70, 100, 110],
            backgroundColor: '#88c0d0',  // Light purple accent
            borderColor: '#88c0d0',
            borderWidth: 5,
          },
          {
            label: 'Revenue ($K)',  // Revenue generated in thousands
            data: [10, 15, 12, 18, 20, 25],
            backgroundColor: '#A3BE8C',  // Light green accent
            borderColor: '#A3BE8C',
            borderWidth: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false  // Hide x-axis grid lines
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false  // Hide y-axis grid lines
            }
          },
        },
      },
    });

    const myTrafficChart = new Chart('myTrafficChart',{
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Store Traffic',
            data: [300, 400, 350, 450, 550, 600, 500, 650, 700, 800, 750, 900], // Example data
            borderColor: 'rgba(255, 99, 132, 1)', // Color for the line
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Gradient background
            fill: true,
            tension: 0.4, // Smooth curve
            pointRadius: 4, // Size of points
          },
          {
            label: 'Projected Traffic',
            data: [200, 300, 250, 350, 450, 500, 600, 550, 650, 700, 800, 850], // Example projected data
            borderColor: 'rgba(54, 162, 235, 1)', // Different color for projection
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            borderDash: [5, 5], // Dotted line for projections
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: true,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              display: true,
            },
          },
        },
      },
    });
  }
  }