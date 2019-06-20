import { appRoutes } from './../routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoBarComponent } from './components/logo-bar/logo-bar.component';
import { BorrowBookService } from './services/borrow-book.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SummaryTabComponent } from './components/summary-tab/summary-tab.component';
import { FindBookTabComponent } from './components/find-book-tab/find-book-tab.component';
import { AddBookTabComponent } from './components/add-book-tab/add-book-tab.component';
import { AddUserTabComponent } from './components/add-user-tab/add-user-tab.component';
import { GeneralBorrowingChartComponent } from './components/charts/general-borrowing-chart/general-borrowing-chart.component';
import { TopBooksChartComponent } from './components/charts/top-books-chart/top-books-chart.component';
import { TopGenresChartComponent } from './components/charts/top-genres-chart/top-genres-chart.component';
import { MonthlyBorrowingChartComponent } from './components/charts/monthly-borrowing-chart/monthly-borrowing-chart.component';
import { FindUserTabComponent } from './components/find-user-tab/find-user-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoBarComponent,
    SidebarComponent,
    SummaryTabComponent,
    FindBookTabComponent,
    AddBookTabComponent,
    AddUserTabComponent,
    GeneralBorrowingChartComponent,
    TopBooksChartComponent,
    TopGenresChartComponent,
    MonthlyBorrowingChartComponent,
    FindUserTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [BorrowBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
