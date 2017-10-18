import {Component} from '@angular/core';
import {ContentChildren, QueryList} from '@angular/core';

import {MenuItemComponent} from './menu-item.component';

@Component({
  selector: 'menu-section',
  template: `
    <div class="title">
      <h3>{{title}}</h3>
    </div>
    <ng-content></ng-content>
  `,
  // <menu-item *ngFor="let item of itemAry"
  // title]="item.title">
  // </menu-item>
  inputs: ['title']//read the title property as input
})
export class MenuSectionComponent {
  title: string;

	//each of the menu sections, we parse for section items
	//each of those items have to be recreated in the template
	//because the component removes it from the DOM when it's parsed
	//it seems you can either loop over the discovered items or recreate/replace them with ng-content
  @ContentChildren(MenuItemComponent)
  itemAry: QueryList<MenuItemComponent>;
}
