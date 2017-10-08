import {Component} from '@angular/core';
// import {InventoryService} from './inventory.service';
import {InventoryService} from "./tracing-inventory.service";

@Component({
  selector: 'gear-item',
  template: `
    <button class="btn"
      [style.margin-bottom.px]="4"
      [class.btn-success]="selected"
      [class.btn-danger]="!selected"
      (click)="toggle()">
      {{name}}
    </button>
  `,
  inputs: ['name', 'owner']
})
export class ItemComponent {
  name: string;
  owner: string;
  selected = false;
  
  constructor(private inventory: InventoryService) {
  }

  toggle() {
    this.inventory.toggleItem(this.name, this.owner);
    this.selected = this.inventory.hasItem(this.name);
    console.log("ItemComponent::toggle(),\nname: ", this.name, ", Is selected? ", this.selected );
  }
}