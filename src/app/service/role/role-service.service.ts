import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Roles} from '../../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {
  listurl = 'http://localhost:8484/api/roles/list';
  saveurl = 'http://localhost:8484/api/roles/save-role';
  findoneurl = 'http://localhost:8484/api/roles';

  constructor(private http: HttpClient, private router: Router) { }

  public fetchAll() {
    return this.http.get<Roles[]>(this.listurl);
  }

  public saveRole(role: Roles) {
    return this.http.post<Roles>(this.saveurl, role);
  }

  findOne(idRole: number) {
    return this.http.get<Roles>(this.findoneurl + '/' + idRole).subscribe(
      (data) => {
        return data.id = idRole;
      }
    );
  }
}
