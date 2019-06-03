import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSectionComponent } from './components/nav-section/nav-section.component';
import { BorrowedBooksComponent } from './components/borrowed-books/borrowed-books.component';
import { SearchAndBorrowComponent } from './components/search-and-borrow/search-and-borrow.component';
import { BorrowBookService } from './services/borrow-book.service';

@NgModule({
  declarations: [
    AppComponent,
    NavSectionComponent,
    BorrowedBooksComponent,
    SearchAndBorrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BorrowBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
