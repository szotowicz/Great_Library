import { Book } from './book';
export class BookBorrowed extends Book {
    dateOfBorrow: Date;
    dateOfReturn?: Date;
}
