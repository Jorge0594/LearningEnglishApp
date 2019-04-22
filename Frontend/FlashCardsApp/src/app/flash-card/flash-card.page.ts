import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../services/card-service.service';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.page.html',
  styleUrls: ['./flash-card.page.scss'],
})
export class FlashCardPage {

  private cardsNum: number;
  private flipped = false;
  private numSlides : Array<number> = [];

  constructor(private route: ActivatedRoute, private cardService: CardService) { 
    /*this.route.params.subscribe(
      params => {
        this.cardsNum = params['num'];
      }
    );*/

    
    this.cardService.getCardList().getCardObjects().forEach( card => {
      console.log("WRITE");
      console.log(card);
    });

    console.log(this.cardService.getCardList().getCardObjects().length)
  }

  flip(){
    this.flipped = !this.flipped;
  }

}
