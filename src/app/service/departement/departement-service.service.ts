import { Injectable } from '@angular/core';
import {Departement} from '../../models/departement';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartementServiceService {
  listUrl = 'http://localhost:8484/api/departments/list';
  saveUrl = 'http://localhost:8484/api/departments/save-department';
  getOneUrl = 'http://localhost:8484/api/departments';
  constructor(private http: HttpClient) { }

  public fetchAllDep() {
    return this.http.get<Departement[]>(this.listUrl);
  }

  public saveDepartement(dep: Departement) {
    return this.http.post<Departement>(this.saveUrl, dep);
  }

  public getOneDep(id: number) {
    return this.http.get<Departement>(this.getOneUrl + '/' + id);
  }
}
