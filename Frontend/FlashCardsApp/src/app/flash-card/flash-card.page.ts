import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.page.html',
  styleUrls: ['./flash-card.page.scss'],
})
export class FlashCardPage {

  private cardsNum: number;
  private flipped = false;
  private numSlides : Array<number> = [];

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(
      params => {
        this.cardsNum = params['num'];
        for(let i = 0; i < this.cardsNum; i++) this.numSlides.push(i + 1);
      }
    );
  }

  flip(){
    this.flipped = !this.flipped;
  }

}
