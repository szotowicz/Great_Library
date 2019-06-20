import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book-tab',
  templateUrl: './add-book-tab.component.html',
  styleUrls: ['./add-book-tab.component.css']
})
export class AddBookTabComponent implements OnInit {

  availableBookGenres: Array<string> = [];

  constructor() {
    //TODO : read from db
    this.availableBookGenres.push('Action and adventure');
    this.availableBookGenres.push('Art');
    this.availableBookGenres.push('Biography');
    this.availableBookGenres.push('Children\'s');
    this.availableBookGenres.push('Crime');
    this.availableBookGenres.push('Health');
    this.availableBookGenres.push('Fantasy');
    this.availableBookGenres.push('History');
    this.availableBookGenres.push('Horror');
    this.availableBookGenres.push('Science');
    this.availableBookGenres.push('Romance');
    this.availableBookGenres.push('Travel');
    this.availableBookGenres.push('Science fiction');
    this.availableBookGenres.push('Thriller');
  }

  ngOnInit() {
  }

}
