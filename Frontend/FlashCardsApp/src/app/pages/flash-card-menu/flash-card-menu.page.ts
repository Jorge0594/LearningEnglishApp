import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CardService } from '../../services/card-service.service';


@Component({
  selector: 'app-flash-card-menu',
  templateUrl: './flash-card-menu.page.html',
  styleUrls: ['./flash-card-menu.page.scss'],
})
export class FlashCardMenuPage {

  private options = [
    10,
    20,
    30,
    40,
    50,
    "infinite"
  ]
  constructor(private navCtrl: NavController, private cardService: CardService) { }

  load(nCards: number) {
    this.cardService.cleanCardList();
    this.navCtrl.navigateForward('/flash-card/' + nCards);
  }
}
