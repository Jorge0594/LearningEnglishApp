import { FrontCardModel } from './frontCard-model';
import { BackCardModel } from './backCard-model';

export class CardObjectModel{
    front: FrontCardModel;
    back: BackCardModel;

    constructor(front: FrontCardModel, back: BackCardModel){}
    
    equals(card : CardObjectModel): boolean{
        return (this.front.word == card.front.word) && (this.back.word == card.back.word);
    }
}