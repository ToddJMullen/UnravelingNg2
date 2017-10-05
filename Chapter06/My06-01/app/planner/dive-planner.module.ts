import {NgModule} from "@angular/core";
import {BrowserModule}  from "@angular/platform-browser";

import {UtilityModule}   from "../thirdparty/acme/utility.module";

import {DivePlannerComponent} from "./dive-planner.component";

@NgModule({
    imports: [
        BrowserModule
        ,UtilityModule
    ]
    ,declarations: [DivePlannerComponent]
    ,exports: [DivePlannerComponent]
})
export class DivePlannerModule{}
