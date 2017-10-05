import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {BorderDirective} from "./border.directive";

@NgModule({
  imports: [BrowserModule]//What it needs
  ,declarations: [BorderDirective]//what it has
  ,exports: [BorderDirective]//what it shares
})
export class AcmeModule{}
