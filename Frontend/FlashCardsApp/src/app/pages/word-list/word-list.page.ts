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
  private auxList: Array<any> = [];
  private removed: boolean = true;

  constructor(private wordService: WordService<Array<WordModel>>, private snackBar: MatSnackBar) {

    this.wordService.getAllWords("jorge").subscribe(
      response => {
        this.wordList = response
        this.auxList = response;
      }
    );
  }

  initializeItems() {
    this.wordList = this.auxList;
  }

  removeWord(word: WordModel) {//Change to Wordmodel
    let index = this.wordList.indexOf(word);
    this.wordList = this.wordList.filter(it => it.id != word.id)

    let snackBarRef = this.snackBar.open("Word removed", "Undo", { duration: 3000 });

    snackBarRef.onAction().subscribe(() => {
      this.removed = false;
      this.wordList.splice(index, 0, word);
    });

    snackBarRef.afterDismissed().subscribe((action) => {
      if (this.removed) {
        this.wordService.deleteWord(word.id).subscribe(
          response => console.log("WORD " + word.word + " has been deleted")
        )
      }
      this.removed = true;
    });
  }

  filterWords(event: any) {
    this.initializeItems();

    const val = event.target.value;

    if (val && val.trim() != '') {
      this.wordList = this.wordList.filter(word => word.word.toLowerCase().indexOf(val.toLowerCase()) > -1);
    }
  }


}
