import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { WordService } from '../services/word.service';
import { CardService } from '../services/card-service.service';
import { WordModel } from '../model/word-model';
import { CardModel } from '../model/card-model';
import { CardObjectModel } from '../model/cardObject-model';
import { FrontCardModel } from '../model/frontCard-model';
import { BackCardModel } from '../model/backCard-model';

@Component({
  selector: 'app-flash-card-menu',
  templateUrl: './flash-card-menu.page.html',
  styleUrls: ['./flash-card-menu.page.scss'],
})
export class FlashCardMenuPage {

  private options = [
    10,
    20,
    30,
    40,
    50,
    "infinite"
  ]
  constructor(private navCtrl: NavController, private wordService: WordService<Array<WordModel>>, private cardService: CardService) { }

  load(nCards: number) {
    this.wordService.getRandomWords("jorge", nCards).subscribe(
      response =>{
        response.forEach(word => {
          this.cardService.getCardList().addCardObject(new CardObjectModel(new FrontCardModel(word.word), new BackCardModel(word.word, word.meaning)))
        });

        console.log(this.cardService.getCardList());
      }
    )
    this.navCtrl.navigateForward('/flash-card/' + nCards);
  }
}
