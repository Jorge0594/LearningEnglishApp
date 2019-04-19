import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FlashCardMenuPage } from './flash-card-menu.page';

const routes: Routes = [
  {
    path: '',
    component: FlashCardMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FlashCardMenuPage]
})
export class FlashCardMenuPageModule {}
