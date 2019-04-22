import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://redbadgegroup3-api.herokuapp.com';
// const apiUrl = 'http://127.0.0.1:5000';

@Injectable()
export class CommentsService {

  constructor(private _http: HttpClient) { }

<<<<<<< HEAD
  getComments() {
    return this._http.get(`${apiUrl}/api/v1/comments/`, { headers: this.setHeaders() });
=======
  getComments():Observable<any>{
    return this._http.get(`${ApiUrl}/api/v1/comments/`, { headers: this.setHeaders() });
>>>>>>> 06d7032b377e7c527dc8f5e79af3823d137303cc
  }

  private setHeaders(): HttpHeaders {
    return new HttpHeaders().set('api-token', localStorage.getItem('api-token'));
  }

  createComment(content: Comment): Observable<any> {
    return this._http.post(`${apiUrl}/api/v1/comments/`, content, { headers: this.setHeaders()});
  }
}
