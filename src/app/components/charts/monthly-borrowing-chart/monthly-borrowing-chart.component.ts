import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  { data: [65, 59, 80, 81, 56, 54], label: 'Female'},
   { data: [25, 39, 60, 91, 36, 51], label: 'Male'}
 ];

 const SAMPLE_BARCHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

@Component({
  selector: 'app-monthly-borrowing-chart',
  templateUrl: './monthly-borrowing-chart.component.html',
  styleUrls: ['./monthly-borrowing-chart.component.css']
})
export class MonthlyBorrowingChartComponent implements OnInit {

  constructor() { }

  //TODO: data from DB
  public chartData: any[] = SAMPLE_BARCHART_DATA;
  public chartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public chartType = 'bar';
  public chartLegend = true;
  public chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
  }

}
