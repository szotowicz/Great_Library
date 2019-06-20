import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-find-user-tab',
  templateUrl: './find-user-tab.component.html',
  styleUrls: ['./find-user-tab.component.css']
})
export class FindUserTabComponent implements OnInit {

  allUsers: Array<User> = [];
  //TODO: add pagination
  usersToDisplay: Array<User> = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.registeredUsersObs.subscribe(response => {
      this.allUsers = response;
      this.usersToDisplay = response;
    });
  }

  private addUser(newUser: User): void {
    //TODO
  }

  private enableUser(newUser: User): void {
    //TODO
  }

  private disableUser(newUser: User): void {
    //TODO
  }

  private searchUser(keyword: string): void {
    this.usersToDisplay = this.allUsers.filter(
      u => u.id.toString().toLowerCase().includes(keyword.toLowerCase())
        || u.firstName.toLowerCase().includes(keyword.toLowerCase())
        || u.lastName.toLowerCase().includes(keyword.toLowerCase())
        || u.email.toLowerCase().includes(keyword.toLowerCase()));
  }
}
