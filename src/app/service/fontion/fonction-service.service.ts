import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Fonction} from '../../models/fonction';

@Injectable({
  providedIn: 'root'
})
export class FonctionServiceService {
  listUrl = 'http://localhost:8484/api/fonctions/list';
  saveUrl = 'http://localhost:8484/api/fonctions/save-fonction';
  getoneUrl = 'http://localhost:8484/api/fonctions';
  constructor(private http: HttpClient) { }

  fetchAllfonction() {
    return this.http.get<Fonction[]>(this.listUrl);
  }

  saveFonction(fonction: Fonction) {
    return this.http.post<Fonction>(this.saveUrl, fonction);
  }

  getOne(id: number) {
    return this.http.get<Fonction>(this.getoneUrl + '/' + id);
  }
}
