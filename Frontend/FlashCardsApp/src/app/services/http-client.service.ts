import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '../../../node_modules/@angular/common/http';

const BASE_URL = environment.api;

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  

  constructor(private http: HttpClient) { }

  get(url:any){
    
  }

  post(url:any, body:any){
    return this.http.post((BASE_URL + url), body).pipe(
      map(
        response =>{
          return response;
        }
    ));
  }
}
