import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-books-chart',
  templateUrl: './top-books-chart.component.html',
  styleUrls: ['./top-books-chart.component.css']
})
export class TopBooksChartComponent implements OnInit {

  //TODO: data from DB
  public mostOftenBorrowedBooks: string[] = [
    'Harry Potter i Kamień Filozoficzny',
    'W pustyni i w puszczy',
    'Zbrodnia i kara'
  ];

  constructor() { }

  ngOnInit() {
  }

}
