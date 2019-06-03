import { BookInLibrary } from './../../models/book-in-library';
import { Component, OnInit } from '@angular/core';
import { BorrowBookService } from 'src/app/services/borrow-book.service';

@Component({
  selector: 'app-search-and-borrow',
  templateUrl: './search-and-borrow.component.html',
  styleUrls: ['./search-and-borrow.component.css']
})
export class SearchAndBorrowComponent implements OnInit {

  allBooks: Array<BookInLibrary> = [];
  booksToDisplay: Array<BookInLibrary> = [];

  constructor(private borrowBookService: BorrowBookService) { }

  ngOnInit() {
    this.borrowBookService.booksInLibraryObs.subscribe(response => {
      this.allBooks = response;
      this.booksToDisplay = response;
    });
  }

  private borrowBook(book: BookInLibrary): void {
    this.borrowBookService.borrowBook(book);
  }

  private searchBook(keyword: string): void {
    this.booksToDisplay = this.allBooks.filter(b => b.title.toLowerCase().includes(keyword.toLowerCase()) 
    || b.author.toLowerCase().includes(keyword.toLowerCase()));
  }
}
