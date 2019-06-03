import { BorrowBookService } from './../../services/borrow-book.service';
import { Component, OnInit } from '@angular/core';
import { BookBorrowed } from 'src/app/models/book-borrowed';

@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.css']
})
export class BorrowedBooksComponent implements OnInit {

  books: Array<BookBorrowed> = [];

  constructor(private borrowBookService: BorrowBookService) { }

  ngOnInit() {
    this.borrowBookService.borrowedBooksObs.subscribe(response => {
      this.books = response;
    });
  }

  private returnBook(book: BookBorrowed): void {
    this.borrowBookService.returnBook(book);
  }
}
