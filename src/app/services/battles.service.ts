import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Apiurl = 'http://redbadgegroup3-api.herokuapp.com';

@Injectable()
export class BattlesService {

  constructor(private _http:HttpClient) { }

  getBattles() {
    return this._http.get(`${Apiurl}/Battles`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  /// Function that sends the form data to the calc url to the api and then displays the response
}
