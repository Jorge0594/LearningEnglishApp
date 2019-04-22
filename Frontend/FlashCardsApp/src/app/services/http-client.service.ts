import { Injectable, Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { WordModel } from '../model/word-model';
import { Observable } from 'rxjs';

const BASE_URL = environment.api;

@Injectable({
  providedIn: 'root'
})
export class HttpClientService <T extends Object>{

  

  constructor(private http: HttpClient) { }

  get(url:any): Observable<T>{
    return this.http.get<T>(BASE_URL + url).pipe(
      map(
        response=> {
          return response;
        }
      )
    )
  }

  post(url:any, body:T){
    return this.http.post((BASE_URL + url), body).pipe(
      map(
        response =>{
          return response;
        }
    ));
  }
}
