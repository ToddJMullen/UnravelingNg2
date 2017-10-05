import {Component} from "@angular/core";

import {InventoryService} from "./inventory.service";

@Component({
    selector: "is-item"
    ,templateUrl: "./item.template.html"
    ,inputs: ["name", "owner"]
})
export class ItemComponent{

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

