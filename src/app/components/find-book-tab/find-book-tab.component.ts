import { BookInLibrary } from './../../models/book-in-library';
import { Component, OnInit } from '@angular/core';
import { BorrowBookService } from 'src/app/services/borrow-book.service';

@Component({
  selector: 'app-find-book-tab',
  templateUrl: './find-book-tab.component.html',
  styleUrls: ['./find-book-tab.component.css']
})
export class FindBookTabComponent implements OnInit {

  allBooks: Array<BookInLibrary> = [];
  //TODO: add pagination
  booksToDisplay: Array<BookInLibrary> = [];

  constructor(private borrowBookService: BorrowBookService) { }

  ngOnInit() {
    this.borrowBookService.booksInLibraryObs.subscribe(response => {
      this.allBooks = response;
      this.booksToDisplay = response;
    });
  }

  private editBook(book: BookInLibrary): void {
    //TODO:
  }

  private borrowBook(book: BookInLibrary): void {
    //TODO: borrow for some user
    this.borrowBookService.borrowBook(book);
  }

  private searchBook(keyword: string): void {
    this.booksToDisplay = this.allBooks.filter(b => b.title.toLowerCase().includes(keyword.toLowerCase())
    || b.author.toLowerCase().includes(keyword.toLowerCase()));
  }
}
