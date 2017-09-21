import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DiveSite} from './dive-site';

@Component({
  selector: 'dive-site-list',
  templateUrl: 'app/dive-site-list.template.html'
})
export class DiveSiteListComponent {
	@Input() siteAry:DiveSite[];
	@Output() onAdd = new EventEmitter();

	add(){
		console.log("DiveSiteListComponent::add()", arguments);
		let data = null;//assigned as a var so I can experiment with it
		this.onAdd.emit(data);
	}

}//DiveSiteListComponent
