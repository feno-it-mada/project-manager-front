import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/user';
import {UserServiceService} from '../../../../service/user/user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  User: User;

  constructor(private userService: UserServiceService,
              private router: Router) { }

  ngOnInit() {
    this.userService.getAllUser().subscribe(
      (data => {
        this.users = data;
      })
    );
  }

  onFetchOneUser(idUser: number) {
    this.router.navigate(['update-user', idUser]);
  }

  onAdd() {
    this.router.navigate(['add-user']);
  }

}
