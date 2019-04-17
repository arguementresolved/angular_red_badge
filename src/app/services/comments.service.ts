import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://redbadgegroup3-api.herokuapp.com';

@Injectable()
export class CommentsService {

  constructor(private _http: HttpClient) { }

  getComments(){
    return this._http.get(`${ApiUrl}/api/v1/comments/`, { headers: this.getHeaders() });
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `bearer ${localStorage.getItem('id_token')}`);
  }
  createComment(comment: Comment) {
    this._http.post(`${ApiUrl}/api/v1/comments/`, comment, { headers: this.getHeaders()});
  }
}

