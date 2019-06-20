import { Component, OnInit } from '@angular/core';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [10, 11, 19, 21, 17, 22], label: 'Under 15 years'},
  { data: [32, 14, 46, 23, 38, 56], label: '15 to 19 years'},
  { data: [17, 36, 43, 29, 31, 47], label: '20 to 29 years'},
  { data: [12, 18, 26, 13, 28, 26], label: '30+ years'}
];
 const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

@Component({
  selector: 'app-general-borrowing-chart',
  templateUrl: './general-borrowing-chart.component.html',
  styleUrls: ['./general-borrowing-chart.component.css']
})
export class GeneralBorrowingChartComponent implements OnInit {

  constructor() { }

  //TODO: data from DB
  public chartData: any[] = LINE_CHART_SAMPLE_DATA;
  public chartLabels: string[] = LINE_CHART_LABELS;
  public chartType = 'line';
  public chartLegend = true;
  public chartOptions: any = {
    responsive: true
  };

  ngOnInit() {
  }

}
