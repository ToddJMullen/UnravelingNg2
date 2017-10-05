import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser"

import {InventoryComponent} from "./inventory.component";

@NgModule({
    imports: [
        BrowserModule
    ]
    ,declarations:[
        InventoryComponent
    ]
    ,exports: [
        InventoryComponent
    ]
})
export class InventoryModule{}
