import { MeaningModel } from './meaning-model';

export class BackCardModel{
    word: string;
    meanings: Array<MeaningModel>;

    constructor(word: string, meanings: Array<MeaningModel>){}
}