import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {BuddyComponent} from "./buddy.component";

@NgModule({
  imports: [BrowserModule]
  ,declarations: [BuddyComponent]
  ,exports: [BuddyComponent]
})
export class BuddyModule{}