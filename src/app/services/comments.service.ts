import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://redbadgegroup3-api.herokuapp.com/';

@Injectable()
export class CommentsService {

  constructor(private _http: HttpClient) { }
   }

  getComments(){
    return this._http.get('${ApiUrl}/comments', { headers: this.getHeaders()})
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getitem('id_token')}`);
  }
}

