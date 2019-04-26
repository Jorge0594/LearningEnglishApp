import { Component, OnInit } from '@angular/core';
import { WordModel } from '../../model/word-model';
import { WordService } from '../../services/word.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';

const N_WORDS = 10;

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.page.html',
  styleUrls: ['./word-list.page.scss'],
})
export class WordListPage {

  private wordList: Array<any> = [];
  private auxList: Array<any> = [];
  private removed: boolean = true;
  private iterator: number;
  private activateScroll:boolean = true;

  constructor(private wordService: WordService<Array<WordModel>>, private snackBar: MatSnackBar) {
    this.initializeItems();
  }

  initializeItems() {
    this.iterator = 0;
    let limit = this.iterator + N_WORDS > this.wordService.getUserWords().length ? this.wordService.getUserWords().length : this.iterator + N_WORDS;

    for (let i = this.iterator; i < limit; i++) {
      this.wordList.push(this.wordService.getUserWords()[i]);
    }

    this.auxList = this.wordList;
    this.iterator += N_WORDS;

  }

  resetItems() {
    this.wordList = this.auxList;
  }

  removeWord(word: WordModel) {
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
          response => {
            this.wordService.setUserWords(this.wordService.getUserWords().filter(it => it.id != word.id));
            this.auxList = this.auxList.filter(elem => elem.id != word.id);
          }
        )
      }
      this.removed = true;
    });

    
  }

  filterWords(event: any) {
    this.activateScroll = false;
    this.resetItems();

    const val = event.target.value;

    if (val && val.trim() != '') {
      this.wordList = this.wordList.filter(word => word.word.toLowerCase().indexOf(val.toLowerCase()) > -1);
    } else {
      this.activateScroll = true;
    }
  }


  loadMore(event) {

    let limit = this.iterator + N_WORDS > this.wordService.getUserWords().length ? this.wordService.getUserWords().length : this.iterator + N_WORDS;

    setTimeout(() => {
      for (let i = this.iterator; i < limit; i++) {
        this.wordList.push(this.wordService.getUserWords()[i]);
      }

      this.iterator += N_WORDS;

      this.auxList = this.wordList;

      event.target.complete();
    }, 150);

  }


}
