import { Injectable } from '@angular/core';
import { CardModel } from '../model/card-model';

@Injectable({
  providedIn: 'root'
})
export class CardService{

  private cardList: CardModel;

  constructor() { 
    this.cardList = new CardModel();
  }

  getCardList(): CardModel{
    return this.cardList;
  }

  cleanCardList(){
    this.cardList.removeAllObjects();
  }
}
