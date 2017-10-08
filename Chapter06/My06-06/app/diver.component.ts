import {Component} from '@angular/core';

// import {InventoryService} from "./inventory.service";
import {InventoryService, TracingInventoryService} from './tracing-inventory.service';

@Component({
  selector: 'diver'
  ,providers: [
//    InventoryService
    {provide: InventoryService
    ,useClass:TracingInventoryService}
  ]
  ,template: `
    <div class="col-sm-3">
      <h4>{{name}}</h4>
      <gear-item *ngFor="let item of items"
          (click)="inventory.toggleItem( item, name )"
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