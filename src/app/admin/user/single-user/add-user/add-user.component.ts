import { Component, OnInit } from '@angular/core';
import {DepartementServiceService} from '../../../../service/departement/departement-service.service';
import {FonctionServiceService} from '../../../../service/fontion/fonction-service.service';
import {RoleServiceService} from '../../../../service/role/role-service.service';
import {UserServiceService} from '../../../../service/user/user-service.service';
import {Fonction} from '../../../../models/fonction';
import {Departement} from '../../../../models/departement';
import {Router} from '@angular/router';
import {Roles} from '../../../../models/role';
import {User} from '../../../../models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  utilisateur: User = new User();
  roles: Roles[];
  departements: Departement[];
  fonctions: Fonction[];
  /*
    onUserUrl = 'http://localhost:8484/api/users';
  */
  constructor(private userService: UserServiceService,
              private router: Router,
              private roleService: RoleServiceService,
              private departementService: DepartementServiceService,
              private fonctionService: FonctionServiceService) { }

  ngOnInit() {
    this.roleService.fetchAll().subscribe(
      (data) => {
        this.roles = data;
      }
    );
    this.departementService.fetchAllDep().subscribe(
      (data) => this.departements = data
    );
    this.fonctionService.fetchAllfonction().subscribe(
      (data) => this.fonctions = data
    );
  }

  onCancel() {
    this.userService.getAllUser();
    this.router.navigate(['user']);
  }

  createUser(user: User) {
    this.userService.addUser(user)
      .subscribe( data => {
        console.log('User created successfully.');
        this.router.navigate(['user']);
      });
    console.log('USER : ' +  JSON.stringify(user));
  }

}
