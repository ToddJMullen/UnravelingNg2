import {Component} from '@angular/core';

// import {InventoryService} from "./inventory.service";
// import {IInventory} from "./tracing-inventory.service";
//import {InventoryService, TracingInventoryService} from './tracing-inventory.service';
import {InventoryService} from './tracing-inventory.service';
import {InventoryPlusTracingService} from "./inventory-plus-tracing.service";

@Component({
  selector: 'diver'
  ,providers: [
//    InventoryService
//    {provide: InventoryService
//    ,useClass:TracingInventoryService}
//	  ,InventoryPlusTracingService//Provide one inventory for each diver
	  //I don't want to use that long name, so I'll alias it
	  ,{provide: InventoryService
	  	,useClass: InventoryPlusTracingService
	  }
  ]
  ,template: `
    <div class="col-sm-3">
      <h4>{{name}}</h4>
      <gear-item *ngFor="let item of items"
        [name]="item"
        [owner]="name">
      </gear-item>
      <br />
      <code>{{inventory.getItems() | json}}</code>
    </div>
  `,
  inputs: ['name', 'items']
})
export class DiverComponent {
  name: string;
  items: string[];

  constructor(private inventory: InventoryService) {
  }
}
// (click)="inventory.toggleItem( item, name )"
