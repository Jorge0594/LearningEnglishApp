import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { WordModel } from '../model/word-model';
import { MeaningModel } from '../model/meaning-model';
import { AlertController } from '@ionic/angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { WordService } from '../services/word.service';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.page.html',
  styleUrls: ['./add-word.page.scss'],
})
export class AddWordPage {

  wordform: FormGroup;
  wordType = "";

  private word: WordModel;
  private id: number;
  private meaningList: Array<MeaningModel> = [];
  

  constructor(private formBuilder: FormBuilder, private alertCtrl: AlertController, private wordService: WordService) {
    this.id = 0;
    this.wordform = this.formBuilder.group({
      word: ['', Validators.required],
      type: ['', Validators.required],
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

  summitWord(): void{
    let subTypeArray: Array<string> = [];
    let word: WordModel;
    subTypeArray = this.wordform.controls['subtype'].value.split(",");
    word = new WordModel("none", this.wordform.controls['word'].value, "jorge", this.wordform.controls['type'].value, subTypeArray, this.meaningList, 0, 0, 0, this.wordform.controls['comment'].value);

    this.wordService.newWord(word).subscribe(
      response => console.log("New word has been added"),
      error => console.error("ERROR: " + error)
    )
  }

}
