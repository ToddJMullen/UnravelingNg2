import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {InventoryService} from "./inventory.service";

import {InventoryComponent} from "./inventory.component";
import {DiveItemComponent} from "./dive-item.component";

@NgModule({
    imports: [
        BrowserModule
    ]
    ,declarations:[
        InventoryComponent
      ,DiveItemComponent
    ]
    ,providers: [
      InventoryService
    ]
    ,exports: [
        InventoryComponent
      ,DiveItemComponent
    ]
})
export class InventoryModule{}
