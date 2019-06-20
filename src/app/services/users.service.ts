import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // TODO : data from DB
  private registeredUsers: Array<User> = [];

  public registeredUsersObs = new BehaviorSubject<Array<User>>([]);

  constructor() {
    this.registeredUsers.push({id: 1, firstName: 'John', lastName: 'Smith', email: 'john@smith.com', isActive: true});
    this.registeredUsers.push({id: 2, firstName: 'Emma', lastName: 'Johnson', email: 'emma@johnson.com', isActive: false});
    this.registeredUsers.push({id: 3, firstName: 'Liam', lastName: 'Williams', email: 'liam@williams.com', isActive: true});
    this.registeredUsers.push({id: 4, firstName: 'Mia', lastName: 'Jones', email: 'mia@jones.com', isActive: true});
    this.registeredUsers.push({id: 5, firstName: 'Amelia', lastName: 'Brown', email: 'amelia@brown.com', isActive: true});

    this.registeredUsersObs.next(this.registeredUsers);
  }
}
