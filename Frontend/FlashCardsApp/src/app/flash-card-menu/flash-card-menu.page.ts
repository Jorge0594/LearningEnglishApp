import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash-card-menu',
  templateUrl: './flash-card-menu.page.html',
  styleUrls: ['./flash-card-menu.page.scss'],
})
export class FlashCardMenuPage implements OnInit {

  private options = [
    10,
    20,
    30,
    40,
    50,
    "infinite"
]
  constructor() { }

  ngOnInit() {
  }

}
