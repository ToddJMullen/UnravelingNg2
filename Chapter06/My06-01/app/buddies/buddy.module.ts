import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {UtilityModule} from "../thirdparty/acme/utility.module";
import {UtilityModule as GigaUtils} from "../thirdparty/giga/utility.module";

import {BuddyComponent} from "./buddy.component";

@NgModule({
  imports: [
      BrowserModule
      ,UtilityModule
      ,GigaUtils
  ]
  ,declarations: [BuddyComponent]
  ,exports: [BuddyComponent]
})
export class BuddyModule{}
