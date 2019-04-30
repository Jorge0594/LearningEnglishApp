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
    "All"
  ]
  constructor(private navCtrl: NavController, private cardService: CardService) { }

  load(nCards: any) {
    this.cardService.cleanCardList();

    if(nCards == "All"){
      console.log("Enter here")
      this.navCtrl.navigateForward('/flash-card/' + 2147483647);
    } else {
      this.navCtrl.navigateForward('/flash-card/' + nCards);
    }

    
  }
}
