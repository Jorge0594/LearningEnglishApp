import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FlashCardPage } from './flash-card.page';
import { FlashCardComponent } from '../../components/fash-card-component/flash-card.component';

const routes: Routes = [
  {
    path: '',
    component: FlashCardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FlashCardPage,
    FlashCardComponent
  ]
})
export class FlashCardPageModule {}
