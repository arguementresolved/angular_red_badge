
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/register';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyToken } from '../models/token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { LoginType } from '../models/login';
import { userModel } from '../models/user';

const apiUrl = 'http://redbadgegroup3-api.herokuapp.com';
// const apiUrl = 'http://127.0.0.1:5000';

@Injectable()

export class AuthService {
  userInfo: MyToken;
  isLoggedIn = new Subject<boolean>();


  constructor(private _http: HttpClient, private _router: Router) { }
  register(regUserData: RegisterUser) {
    return this._http.post(`${apiUrl}/api/v1/users/`, regUserData);
  }

  login(loginInfo: LoginType) {
    return this._http.post(`${apiUrl}/api/v1/users/login`, loginInfo).subscribe( (token: MyToken) => {
      this.userInfo = token;
      localStorage.setItem('id_token', token.token);
      this.isLoggedIn.next(true);
      this._router.navigate(['/']);
    });
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);
    this._http.post(`${apiUrl}/api/v1/users/logout`, { headers: this.setHeader() } );
    this._router.navigate(['/']);
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  getUser() {
    return this._http.get(`${apiUrl}/api/v1/users/all`, {headers: this.setHeader()});
  }

  loggedInCheck() {
    if (localStorage.getItem('id_token')) {
      this.isLoggedIn.next(true);
      return true; } else {
      this.isLoggedIn.next(false);
      return false; }
  }
}
