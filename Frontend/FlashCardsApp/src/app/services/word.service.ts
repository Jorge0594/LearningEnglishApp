import { Injectable } from '@angular/core';
import { WordModel } from '../model/word-model';
import { HttpClientService } from './http-client.service';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private http: HttpClientService) { }

  newWord(word:WordModel){
    return this.http.post("word/add", word).pipe(
      map(
        response => response,
        error => console.error(error)
      )
    );
  }
}
