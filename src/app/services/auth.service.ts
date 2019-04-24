
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/register';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyToken } from '../models/token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { LoginType } from '../models/login';
import { userModel } from '../models/user';
import { UpdateUser } from '../models/update';
import { apiUrl } from '../../environments/environment.prod';

// const apiUrl = 'http://redbadgegroup3-api.herokuapp.com';
// const apiUrl = 'http://127.0.0.1:5000';

@Injectable()
export class AuthService {
  userInfo: MyToken;
  isLoggedIn = new Subject<boolean>();


  constructor(private _http: HttpClient, private _router: Router) {}

  private setHeader(): HttpHeaders {

    return new HttpHeaders().set('api-token', localStorage.getItem('api-token'));
  }

  register(regUserData: RegisterUser) {
    this._router.navigate(['/login']);
    return this._http.post(`${apiUrl}/api/v1/users/`, regUserData);
  }

  login(loginInfo: LoginType) {
    return this._http.post(`${apiUrl}/api/v1/users/login`, loginInfo).subscribe( (token: MyToken) => {
      this.userInfo = token;
      localStorage.setItem('api-token', token.token);
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

  update(update: UpdateUser) {
    this._router.navigate(['/profile']);
    return this._http.put(`${apiUrl}/api/v1/users/update`, update, { headers: this.setHeader() });
  }

  delete() {
    console.log('made it here');
    this._router.navigate(['/home']);
    return this._http.delete(`${apiUrl}/api/v1/users/delete`, { headers: this.setHeader()});
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
