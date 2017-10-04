import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {HighlightDirective} from "./highlight.directive";

@NgModule({
  imports: [BrowserModule]
  ,declarations: [HighlightDirective]
  ,exports: [HighlightDirective]
})
export class UtilityModule{}
