import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DiveLogComponent} from './dive-log.component';
import {NumberListComponent} from "./number-list.component";


@NgModule({
  imports: [BrowserModule],
  declarations: [DiveLogComponent
,NumberListComponent],
  bootstrap: [DiveLogComponent]
})
export class AppModule { }
