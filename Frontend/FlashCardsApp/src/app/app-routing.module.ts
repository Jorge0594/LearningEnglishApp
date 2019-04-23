import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './pages//list/list.module#ListPageModule' },
  { path: 'add-word', loadChildren: './pages/add-word/add-word.module#AddWordPageModule' },
  { path: 'flash-card-menu', loadChildren: './pages/flash-card-menu/flash-card-menu.module#FlashCardMenuPageModule' },
  { path: 'flash-card/:num', loadChildren: './pages/flash-card-exam/flash-card.module#FlashCardPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
