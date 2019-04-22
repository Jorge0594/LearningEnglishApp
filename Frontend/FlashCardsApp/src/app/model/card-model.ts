import { FrontCardModel } from './frontCard-model';
import { BackCardModel } from './backCard-model';
import { CardObjectModel } from './cardObject-model';

export class CardModel {

    private listCardObject: Array<CardObjectModel>;

    constructor(){
        this.listCardObject = [];
    }

    getCardObjects(): Array<CardObjectModel>{
        return this.listCardObject;
    }

    addCardObject(card: CardObjectModel): void {
        this.listCardObject.push(card);
    }

    removeCarObject(card: CardObjectModel): void{
        this.listCardObject = this.listCardObject.filter(c => !card.equals(c));
    }

    removeAllObjects(){
        this.listCardObject = [];
    }
}