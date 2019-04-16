import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://redbadgegroup3-api.herokuapp.com/'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private _http: HttpClient) { }
   }

