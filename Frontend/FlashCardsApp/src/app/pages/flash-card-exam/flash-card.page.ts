import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/card-service.service';
import { WordService } from '../../services/word.service';
import { WordModel } from '../../model/word-model';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.page.html',
  styleUrls: ['./flash-card.page.scss'],
})
export class FlashCardPage {

  private cardsNum: number;
  private flipped = false;
  private cards: Array<any> = [];

  constructor(private route: ActivatedRoute, private cardService: CardService, private wordService: WordService<Array<WordModel>>) {

    this.route.params.subscribe(
      params =>{
        this.wordService.getRandomWords("jorge", params['num']).subscribe(
          response => {
            response.forEach(word => {
              this.cards.push({front: { word: word.word }, back: {word: word.word, meanings: word.meaning }});
            });
          }
        )
      }
    )
  }

  flip() {
    this.flipped = !this.flipped;
  }

}
