import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PlannerModule} from './planner/planner.module';//"phyysical" import
import {LogBookModule} from "./logbook/log-book.module";
import {BuddyModule} from "./buddies/buddy.module";
import {InventoryModule} from "./inventory/inventory.module";
//import {DiverComponent} from "./diver.component";//<= unexpected, maybe can only import modules (like immport like)???
import {DiverModule} from "./diver/diver.module";

@NgModule({
  imports: [
    BrowserModule
    ,PlannerModule//logical import, imports all the exported classes of PlannerModule into the AppModule scope
    ,BuddyModule
    ,LogBookModule
    ,InventoryModule
//    ,DiverComponent//<= no worky here
    ,DiverModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
