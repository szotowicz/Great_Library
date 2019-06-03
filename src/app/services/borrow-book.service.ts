import { BookInLibrary } from '../models/book-in-library';
import { Injectable } from '@angular/core';
import { BookBorrowed } from '../models/book-borrowed';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorrowBookService {

  private booksInLibrary: Array<BookInLibrary> = [];
  private borrowedBooks: Array<BookBorrowed> = [];

  public booksInLibraryObs = new BehaviorSubject<Array<BookInLibrary>>([]);
  public borrowedBooksObs = new BehaviorSubject<Array<BookBorrowed>>([]);

  constructor() {
    this.booksInLibrary.push({title: 'Pan Tadeusz', author: 'Adam Mickiewicz', quantity: 5});
    this.booksInLibrary.push({title: 'W pustyni i w puszczy', author: 'Henryk Sienkiewicz', quantity: 3});
    this.booksInLibrary.push({title: 'Ogniem i mieczem', author: 'Henryk Sienkiewicz', quantity: 2});
    this.booksInLibrary.push({title: 'Lalka', author: 'Bolesław Prus', quantity: 0});
    this.booksInLibrary.push({title: 'Virion. Apekt. Tom 3', author: 'Ziemiański Andrzej', quantity: 2});
    this.booksInLibrary.push({title: 'Mały Książę', author: 'Antoine de Saint-Exupéry', quantity: 4});
    this.booksInLibrary.push({title: '1984', author: 'George Orwell ', quantity: 2});
    this.booksInLibrary.push({title: 'Zbrodnia i kara', author: 'Fiodor Dostojewski', quantity: 1});
    this.booksInLibrary.push({title: 'Przygody Alicji w Krainie Czarów', author: 'Lewis Carroll', quantity: 1});
    this.booksInLibrary.push({title: 'Cień wiatru', author: 'Carlos Ruiz Zafón', quantity: 2});
    this.booksInLibrary.push({title: 'Harry Potter i Kamień Filozoficzny', author: 'J.K. Rowling', quantity: 2});
    this.booksInLibrary.push({title: 'Kod Leonarda da Vinci', author: 'Dan Brown', quantity: 1});

    this.borrowedBooks.push({title: 'Pan Tadeusz', author: 'Adam Mickiewicz', dateOfBorrow: new Date()});
    this.borrowedBooks.push({title: 'W pustyni i w puszczy', author: 'Henryk Sienkiewicz', dateOfBorrow: new Date()});
    this.borrowedBooks.push({title: 'Ogniem i mieczem', author: 'Henryk Sienkiewicz', dateOfBorrow: new Date()});
    this.borrowedBooks.push({title: 'Lalka', author: 'Bolesław Prus', dateOfBorrow: new Date()});

    this.booksInLibraryObs.next(this.booksInLibrary);
    this.borrowedBooksObs.next(this.borrowedBooks);
  }

  public borrowBook(book: BookInLibrary): void {
    const bookInLibrary = this.booksInLibrary.find(b => b.title === book.title
      && b.author === book.author);

    if (bookInLibrary.quantity > 0) {
      this.borrowedBooks.push({title: book.title, author: book.author, dateOfBorrow: new Date()});
      this.borrowedBooksObs.next(this.borrowedBooks);

      bookInLibrary.quantity--;
      this.booksInLibraryObs.next(this.booksInLibrary);
    }
  }

  public returnBook(book: BookBorrowed): void {
    this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
    this.borrowedBooksObs.next(this.borrowedBooks);

    this.booksInLibrary.find(b => b.title === book.title
      && b.author === book.author).quantity++;
    this.booksInLibraryObs.next(this.booksInLibrary);
  }
}
