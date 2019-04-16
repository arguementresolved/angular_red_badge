import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Apiurl = 'http://127.0.0.1:5000';

@Injectable()
export class BattlesService {

  constructor(private _http:HttpClient) { }

  getBattles(){
    return this._http.get(`${Apiurl}/Battles`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
