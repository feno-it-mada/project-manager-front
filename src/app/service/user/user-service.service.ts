import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private userListUrl = 'http://localhost:8484/api/users/list';
  private saveUserUrl = 'http://localhost:8484/api/users/save-user';
  private oneUserUrl = 'http://localhost:8484/api/users';
  constructor(private http: HttpClient) { }
  public getAllUser() {
    return this.http.get<User[]>(this.userListUrl);
  }

  public addUser(user) {
    return this.http.post<User>(this.saveUserUrl, user);
  }

  public modifier(idUser: number, value: User) {
    return this.http.put<User>(this.oneUserUrl + '/' + idUser, value);
  }
  public getOneUser(idUser: number) {
    return this.http.get<User>(this.oneUserUrl + '/' + idUser);
  }
}
