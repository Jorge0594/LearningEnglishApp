import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { WordModel } from '../model/word-model';
import { MeaningModel } from '../model/meaning-model';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { WordService } from '../services/word.service';
import { WordValidator } from '../validators/word.validator';
import { ErrorHandlerService } from '../services/errorhandler.service';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.page.html',
  styleUrls: ['./add-word.page.scss'],
})
export class AddWordPage {

  wordform: FormGroup;
  wordType = "";
  invalidMessageWord: string;

  private word: WordModel;
  private id: number;
  private meaningList: Array<MeaningModel> = [];
  private errorMessage;
  private hasError = false;

  constructor(private formBuilder: FormBuilder, private alertCtrl: AlertController, private wordService: WordService, private navCtrl: NavController,
    private errorhandler: ErrorHandlerService, private loadingCtrl: LoadingController) {
    this.id = 0;

    this.wordform = this.formBuilder.group({
      word: ['', Validators.required],
      wordtype: ['', Validators.required],
      subtype:[''],
      comment:['']
    });
  }

  async addMeaning(){
    let alert = await this.alertCtrl.create({
      header: "New meaning",
      inputs: [
        {
          name: "languague",
          placeholder: "Laguague"
        },
        {
          name: "form",
          placeholder: "Verb form. Eg: get [sb] down"
        },
        {
          name: "meaning",
          placeholder: "Meaning"
        },
        {
          name: "examples",
          placeholder: "Examples"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: data =>{
            console.log("Cancel meaning");
          }
        },
        {
          text: "OK",
          handler: data => {
            let meaning = new MeaningModel(this.id, data.languague, data.form, data.meaning, data.examples);
            this.meaningList.push(meaning);
            this.id++;
          }
        }
      ]
    });
   return await alert.present();
  }

  async createLoading(){
    let loading = await this.loadingCtrl.create({
      message: 'The word has been added correctly.',
      duration: 1500,
      spinner: null
    });

    return await loading.present();
  }

  summitWord(): void{
    this.hasError = false;

    let subTypeArray: Array<string> = [];
    let word: WordModel;

    if(this.wordform.controls['wordtype'].value == "phrasalverb" || this.wordform.controls['wordtype'].value == "expression"){
      subTypeArray = this.wordform.controls['subtype'].value.split(",");
    }
   
    word = new WordModel("none", this.wordform.controls['word'].value, "jorge", this.wordform.controls['wordtype'].value, subTypeArray, this.meaningList, 0, 0, 0, this.wordform.controls['comment'].value);
    if(this.wordform.invalid == true) {
      this.hasError = true;
      this.errorMessage = this.validatorError();
    } else {
      this.wordService.newWord(word).subscribe(
        response => {
          this.createLoading();
          this.navCtrl.navigateForward('/home');
        },
        error => {
          this.hasError = true;
          this.errorMessage = this.errorhandler.generateErrorMessage("AddWordPage", error.status);
        }
      )
    }
    
  }

  validatorError():string{
    if(this.wordform.get('word').hasError('required') || this.wordform.get('wordtype').hasError('required')) return "Please check that you have fill all the required inputs."
  }

}
