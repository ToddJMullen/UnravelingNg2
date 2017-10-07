import {Component} from "@angular/core";

import {InventoryService} from "../inventory/inventory.service";
import {InventoryComponent} from "../inventory/inventory.component";

import {DiveItemComponent} from "../inventory/dive-item.component";

@Component({
    selector: "diver"
    ,inputs: ['name','itemAry']
    ,template: `
<div class="col-xs-3">
    <h4>{{name}}</h4>


    <pre>{{inventory.getItems() | json}}</pre>
</div>
`
})
export class DiverComponent{

    name:string;
    itemAry;

    constructor(
        private inventory:InventoryService
    ){
        console.log("DiverComponent()");
        this.itemAry = this.inventory.getItems();
    }

}//DiveComponent


//    <inventory [itemAry]=itemAry></inventory>

//    <dive-item *ngFor="let gear of itemAry"
//                [name]="gear"
//                [owner]="name">
//    </dive-item>

