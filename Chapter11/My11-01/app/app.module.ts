import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LogBoardComponent} from './log-board.component';

import {MousepadComponent} from "./mousepad.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    LogBoardComponent
    ,MousepadComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }