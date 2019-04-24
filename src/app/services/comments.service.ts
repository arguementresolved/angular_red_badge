import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentModel } from '../models/commentUpdate';
import { Router } from '@angular/router';
import { apiUrl } from '../../environments/environment.prod';


// const apiUrl = 'http://redbadgegroup3-api.herokuapp.com';
// const apiUrl = 'http://127.0.0.1:5000';

@Injectable()
export class CommentsService {

  constructor(private _http: HttpClient, private _router: Router) { }


  getComments(): Observable<any> {
    return this._http.get(`${apiUrl}/api/v1/comments/`, { headers: this.setHeaders() });
  }

  getOneComment(id): Observable<any> {
    return this._http.get(`${apiUrl}/api/v1/comments/${id}`, { headers: this.setHeaders()});
  }

  private setHeaders(): HttpHeaders {
    return new HttpHeaders().set('api-token', localStorage.getItem('api-token'));
  }

  createComment(content: Comment): Observable<any> {
    return this._http.post(`${apiUrl}/api/v1/comments/`, content, { headers: this.setHeaders()});
  }

  deleteComment(something) {
    return this._http.delete(`${apiUrl}/api/v1/comments/${something}`, { headers: this.setHeaders()});
  }

  updateComment(id, update: CommentModel) {
    this._router.navigate(['/nerdFight']);
    return this._http.put(`${apiUrl}/api/v1/comments/${id}`, update, { headers: this.setHeaders()});
  }

  updateredirect(id) {
    this._router.navigate([`/comments/update/${id}`], id);
    localStorage.setItem('comment_id', id);
  }
}
