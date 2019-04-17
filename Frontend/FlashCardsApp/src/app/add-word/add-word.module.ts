import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWordPage } from './add-word.page';

import { MatInputModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: AddWordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddWordPage]
})
export class AddWordPageModule {}
