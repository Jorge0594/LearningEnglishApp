import { MeaningModel } from './meaning-model';

export class WordModel {

    constructor(public id:string, public word:string, public user:string, public type:string, public subType:Array<string>,
        public meaning:Array<MeaningModel>, public nCorrect:number, public nFail:number, public percent:number, public comment:string){
    }

    addCorrect(): void{
        this.nCorrect++;
        this.calculatePercent();
    }

    addWrong(): void{
        this.nFail++;
        this.calculatePercent();
    }

    calculatePercent(){
        this.percent = (this.nCorrect * 100) / (this.nCorrect + this.nFail);
    }
}