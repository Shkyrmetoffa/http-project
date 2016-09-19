import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  public users;

  constructor(private _userService: UserService) {
    this.users = this._userService.returnUsers();
  }
  getUsers() {
    return this._userService.returnUsers();
  }
  removeUser(user) {
    this._userService.removeUser(user);
  }
  ngOnInit() {
  }

}
