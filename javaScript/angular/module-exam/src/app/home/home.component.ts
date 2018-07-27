import { Component, OnInit } from '@angular/core';

import { UserService } from '../core/user.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  template: `
    <app-header [title]="title"></app-header>
    <ul>
      <li>id : {{ user.id }}</li>
      <li>name : {{ user.name }}</li>
      <li>admin : {{ user.admin }}</li>
    </ul>
  `
})
export class HomeComponent implements OnInit {
  title = 'User Information';
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}
