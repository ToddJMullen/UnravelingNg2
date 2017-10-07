import {Component} from "@angular/core";

import {InventoryService} from "./inventory.service";
import {DiveItemComponent} from "./dive-item.component";

import {HighlightDirective} from "../thirdparty/acme/highlight.directive";
import {BorderDirective} from "../thirdparty/giga/border.directive";

@Component({
    selector: "inventory"
    ,templateUrl: "app/inventory/inventory.template.html"
    ,inputs: ['itemAry']
    ,styles: [`
.col-xs-12{
  background-color:#aea;
  }
`]
})
export class InventoryComponent{
  
  itemAry:any[] = ["snorkel","Harpoon","Flippers","Shark Sandwiches"];
  
  constructor(
    private inventory:InventoryService
  ){
    console.log("InventoryComponent()");
  }

}//InventoryComponent
