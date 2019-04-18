import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const ApiUrl = 'https://redbadgegroup3-api.herokuapp.com';

@Injectable()
export class CommentsService {

  constructor(private _http: HttpClient) { }

  getComments(){
    return this._http.get(`${ApiUrl}/api/v1/comments/`, { headers: this.setHeaders() });
  }
  private setHeaders(): HttpHeaders {
    return new HttpHeaders().set('api-token', localStorage.getItem('api-token'));
  }
  createComment(content: Comment): Observable<any> {
    return this._http.post(`${ApiUrl}/api/v1/comments/`, content, { headers: this.setHeaders()});
  }
}
