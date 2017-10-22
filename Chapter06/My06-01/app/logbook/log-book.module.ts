import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {UtilityModule} from "../thirdparty/giga/utility.module";

import {LogBookComponent} from "./log-book.component";

@NgModule({
  imports: [
      BrowserModule
      ,UtilityModule
  ]
  ,declarations: [LogBookComponent]
  ,exports: [LogBookComponent]
})
export class LogBookModule{}
