import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'add-word', loadChildren: './pages/add-word/add-word.module#AddWordPageModule' },
  { path: 'flash-card-menu', loadChildren: './pages/flash-card-menu/flash-card-menu.module#FlashCardMenuPageModule' },
  { path: 'flash-card/:num', loadChildren: './pages/flash-card-exam/flash-card.module#FlashCardPageModule' },
  { path: 'word-list', loadChildren: './pages/word-list/word-list.module#WordListPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
