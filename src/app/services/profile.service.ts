import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

// const apiUrl = 'http://redbadgegroup3-api.herokuapp.com';
const apiUrl = 'http://127.0.0.1:5000';

@Injectable()
export class ProfileService {

  constructor(private _http: HttpClient, private _router: Router) { }

  getProfile() {
    return this._http.get(`${apiUrl}/api/v1/users/profile`);
  }

}
