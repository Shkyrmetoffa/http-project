import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  public user = {fullName: "", email: ""};

  constructor(private _userService: UserService) {

  }
  add(){
    this._userService.add(this.user);
  }
  ngOnInit() {
  }

}
