import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../shared';

@Component({
  selector: 'tnqsoft-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // get users from secure api end point
        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
  }

}
