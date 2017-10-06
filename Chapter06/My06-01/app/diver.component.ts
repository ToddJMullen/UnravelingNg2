import {Component} from "@angular/core";

import {InventoryService} from "./inventory/inventory.service";

@Component({
    selector: "diver"
    ,inputs: ['name','itemAry']
    ,template: `
<div class="col-xs-3">
    <h4>{{name}}</h4>
    <dive-item *ngFor="let gear of itemAry"
                [name]="gear"
                [owner]="name">
    <dive-item>
    <pre>{{inventory.getItems() | json}}</pre>
</div>
`
})
export class DiverComponent{

    name:string;
    itemAry:any[];

    constructor(
        private inventory:InventoryService
    ){
        console.log("DiverComponent()");
    }

}//DiveComponent



