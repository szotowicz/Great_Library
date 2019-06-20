import { Routes } from '@angular/router';
import { SummaryTabComponent } from 'src/app/components/summary-tab/summary-tab.component';
import { FindBookTabComponent } from 'src/app/components/find-book-tab/find-book-tab.component';
import { AddBookTabComponent } from 'src/app/components/add-book-tab/add-book-tab.component';
import { AddUserTabComponent } from 'src/app/components/add-user-tab/add-user-tab.component';
import { FindUserTabComponent } from 'src/app/components/find-user-tab/find-user-tab.component';

export const appRoutes: Routes = [
    { path: 'summary', component: SummaryTabComponent },
    { path: 'add-book', component: AddBookTabComponent },
    { path: 'find-book', component: FindBookTabComponent },
    { path: 'add-user', component: AddUserTabComponent },
    { path: 'find-user', component: FindUserTabComponent },

    { path: '', redirectTo: '/summary', pathMatch: 'full'}
];
