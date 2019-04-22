import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://redbadgegroup3-api.herokuapp.com';
// const apiUrl = 'http://127.0.0.1:5000';

@Injectable()
export class CommentsService {

  constructor(private _http: HttpClient) { }

  getComments() {
    return this._http.get(`${apiUrl}/api/v1/comments/`, { headers: this.setHeaders() });
  }

  private setHeaders(): HttpHeaders {
    return new HttpHeaders().set('api-token', localStorage.getItem('api-token'));
  }

  createComment(content: Comment): Observable<any> {
    return this._http.post(`${apiUrl}/api/v1/comments/`, content, { headers: this.setHeaders()});
  }
}
