import {Component} from "@angular/core";

import {InventoryService} from "./inventory.service";

@Component({
    selector: "dive-item"
    ,inputs: ["name", "owner"]
    ,templateUrl: "app/inventory/dive-item.template.html"
})
export class DiveItemComponent{

    name:string;
    owner:string;
    selected:boolean = false;

    constructor(
        private inventory:InventoryService
    ){}

    toggle(){
        this.inventory.toggle( this.name, this.owner );
        this.selected = this.inventory.hasItem( this.name );
    }


}//ItemComponent

