import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = 'http://redbadgegroup3-api.herokuapp.com';

@Injectable()
export class BattlesService {

  constructor(private _http:HttpClient) { }

  getBattles() {
    return this._http.get(`${apiUrl}/api/v1/battles`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  /// Function that sends the form data to the calc url to the api and then displays the response
  fight(fighter1, fighter2) {
    return this._http.post(`${apiUrl}/api/v1/battles/calc`, `Bearer ${localStorage.getItem('id_token')}`);
    console.log('it did something maybe');
  }
}
