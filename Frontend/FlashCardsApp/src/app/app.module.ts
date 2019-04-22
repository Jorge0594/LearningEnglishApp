import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WordService } from './services/word.service';
import { HttpModule } from '@angular/http';
import { HttpClientService } from './services/http-client.service';
import { ErrorHandlerService } from './services/errorhandler.service';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material';
import { CardService } from './services/card-service.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WordService,
    HttpModule,
    HttpClientService,
    ErrorHandlerService,
    CardService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
