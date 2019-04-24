import { Component, OnInit } from '@angular/core';
import { WordModel } from '../../model/word-model';
import { WordService } from '../../services/word.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.page.html',
  styleUrls: ['./word-list.page.scss'],
})
export class WordListPage {

  private wordList: Array<any> = [];

  constructor(private wordService: WordService<Array<WordModel>>) {

    this.wordService.getAllWords("jorge").subscribe(
      response => this.wordList = response
    );
  }

  removeWord(word:string){//Change to Wordmodel
    console.log("THE WORD " + word + " HAS BEEN REMOVED");
    //this.itemList = this.itemList.filter(item => item != word);
  }
}
