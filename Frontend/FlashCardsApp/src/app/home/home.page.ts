import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public options =  [
    {title: "Flash Cards", link: "/"},
    {title: "Add new word", link: "/add-word"}
  ];

  constructor(private navCtrl: NavController){}

  navigateTo(link:string){
    this.navCtrl.navigateForward(link);  
  }

}
