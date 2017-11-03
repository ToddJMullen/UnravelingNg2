import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DiveLogComponent} from './dive-log.component';
import {NumberListComponent} from "./number-list.component";

import {DiveDataPipe} from "./dive-data.pipe";


@NgModule({
  imports: [BrowserModule],
  declarations: [DiveLogComponent
,NumberListComponent
,DiveDataPipe],
  bootstrap: [DiveLogComponent]
})
export class AppModule { }
