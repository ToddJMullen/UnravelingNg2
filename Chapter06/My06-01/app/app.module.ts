import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PlannerModule} from './planner/planner.module';//"phyysical" import

@NgModule({
  imports: [
    BrowserModule,
    PlannerModule//logical import, imports all the exported classes of PlannerModule into the AppModule scope
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
