import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  { data: [10, 59, 80, 61, 35, 43]}
];

const SAMPLE_BARCHART_LABELS: string[] = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'];

@Component({
  selector: 'app-top-genres-chart',
  templateUrl: './top-genres-chart.component.html',
  styleUrls: ['./top-genres-chart.component.css']
})
export class TopGenresChartComponent implements OnInit {

  constructor() { }

  //TODO: data from DB
  public chartData: any[] = SAMPLE_BARCHART_DATA;
  public chartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public chartType = 'doughnut';
  public chartLegend = true;
  public chartOptions: any = {
    cutoutPercentage: 60,
    responsive: true
  };

  ngOnInit() {
  }

}
