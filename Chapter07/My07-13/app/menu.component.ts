import {Component} from '@angular/core';
import {ContentChildren, QueryList} from '@angular/core';

import {MenuSectionComponent} from './menu-section.component';

@Component({
  selector: 'yw-menu',
  template: `
    <div>
      <menu-section *ngFor="let section of sectionAry"
        [title]="section.title">
	    <menu-item *ngFor="let item of section.itemAry"
	     [title]="item.title">
	    </menu-item>
      </menu-section>
    </div>
  `
  // <ng-content></ng-content>
})
export class MenuComponent {
  selectedTitle: string;

	//create a logical reference to the menu sections defined in yw-menu
	//in the template, we recreate the sections in the template for the menu
	//each of those sections is another component that is created with a list of items
	//the items also need to be recreated in the view (not just the model)
	//Using ng-content tags instead of the loop gives strange results with duplication
  @ContentChildren(MenuSectionComponent)
  sectionAry: QueryList<MenuSectionComponent>;
}
