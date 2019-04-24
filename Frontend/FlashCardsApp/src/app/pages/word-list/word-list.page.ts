import { Component, OnInit } from '@angular/core';
import { WordModel } from '../../model/word-model';
import { WordService } from '../../services/word.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.page.html',
  styleUrls: ['./word-list.page.scss'],
})
export class WordListPage {

  private wordList: Array<any> = [];

  constructor(private wordService: WordService<Array<WordModel>>, private snackBar: MatSnackBar) {

    this.wordService.getAllWords("jorge").subscribe(
      response => this.wordList = response
    );
  }

  removeWord(word: WordModel){//Change to Wordmodel
    let index = this.wordList.indexOf(word);
    console.log(index);
    this.wordList = this.wordList.filter(it => it.id != word.id)
    
    console.log("THE WORD WITH ID " + word.id + " HAS BEEN REMOVED");

    let snackBarRef = this.snackBar.open("Word removed", "Undo", {duration: 3000});
    snackBarRef.onAction().subscribe(() =>{
      this.wordList.splice(index, 0, word);
    });
    //this.itemList = this.itemList.filter(item => item != word);
  }
}
