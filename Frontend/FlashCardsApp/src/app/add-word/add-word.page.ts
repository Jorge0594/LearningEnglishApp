import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.page.html',
  styleUrls: ['./add-word.page.scss'],
})
export class AddWordPage {

  wordform: FormGroup;
  wordType = "";
  

  constructor(private formBuilder: FormBuilder) {
    this.wordform = this.formBuilder.group({
      type: ['', Validators.required],
    });
  }

}
