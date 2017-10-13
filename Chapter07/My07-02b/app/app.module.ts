import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {GameComponent} from './game.component';
import {DiverComponent} from './diver.component';
import {DiverCoupledComponent} from "./diver-coupled.component";
import {DiverDiComponent} from "./diver-di.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    GameComponent,
    DiverComponent,
    DiverCoupledComponent,
    DiverDiComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
