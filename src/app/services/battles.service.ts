import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Battle } from '../models/battles';

const apiUrl = 'http://redbadgegroup3-api.herokuapp.com';
// const apiUrl = 'http://127.0.0.1:5000';

@Injectable()
export class BattlesService {

  constructor(private _http:HttpClient) { }

  getBattles() {
    return this._http.get(`${apiUrl}/api/v1/battles/`, {headers: this.setHeader() });
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('api-token', localStorage.getItem('api-token'));
  }

  fight(fightData: Battle) {
    return this._http.post(`${apiUrl}/api/v1/battles/calc`, fightData, {headers: this.setHeader()});
    console.log('it did something maybe');
  }
}
