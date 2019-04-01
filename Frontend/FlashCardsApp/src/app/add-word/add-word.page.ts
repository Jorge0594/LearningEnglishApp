import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { WordModel } from '../model/word-model';
import { MeaningModel } from '../model/meaning-model';
import { AlertController } from '../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.page.html',
  styleUrls: ['./add-word.page.scss'],
})
export class AddWordPage {

  wordform: FormGroup;
  wordType = "";

  private word: WordModel;
  private meaningList: Array<MeaningModel> = [];
  

  constructor(private formBuilder: FormBuilder, private alertCtrl: AlertController) {
    this.wordform = this.formBuilder.group({
      word: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  summitWord(): void{

  }

}
