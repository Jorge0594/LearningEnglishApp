import { Injectable } from '@angular/core';
import { WordModel } from '../model/word-model';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardModel } from '../model/card-model';

const BASE_URL = "word/";

@Injectable({
  providedIn: 'root'
})
export class WordService <T extends Object>{

  constructor(private http: HttpClientService<T>) { }

  newWord(word:T){
    return this.http.post(BASE_URL + "add", word).pipe(
      map(
        response => response,
        error => console.error(error)
      )
    );
  }

  getRandomWords(user:string, nWords: number): Observable<T> {
    return this.http.get(BASE_URL + "random/" + nWords).pipe(
      map(
        response => response,
        error => console.error(error)
      )
    )
  }

  getAllWords(user: string):Observable<T>{
    return this.http.get(BASE_URL).pipe(
      map(
        response => response,
        error => console.error(error)
      )
    )
  }

  deleteWord(wordId: string):Observable<T>{
    return this.http.delete(BASE_URL + "delete/" + wordId).pipe(
      map(
        response => response,
        error => console.error(error)
      )
    )
  }
}
