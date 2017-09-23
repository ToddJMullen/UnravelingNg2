import {Component, Input, Output, EventEmitter} from '@angular/core';

import {DiveSite} from './dive-site';

@Component({
  selector: 'dive-site-list-view',
  templateUrl: 'app/dive-site.list.template.html'
})
export class DiveSiteListComponent {
	@Input() siteAry:DiveSite[];

	colorAry:string[] = ["black","yellow","green","blue","purple"];


	@Output() onDelete = new EventEmitter();
	deleteSite( site:DiveSite ):void{
		console.log("DiveSiteListComponent::deleteSite(), got:", site );
		this.onDelete.emit(site);

	}

	@Output() onAdd = new EventEmitter();
	add(){
		console.log("DiveSiteListComponent::add()", arguments);
		let data = null;//assigned as a var so I can experiment with it
		this.onAdd.emit(data);
	}

	@Output() onEdit = new EventEmitter<DiveSite>();
	edit( site:DiveSite ):void{
		console.log("DiveSiteListComponent::edit()", site);
		this.onEdit.emit(site);
	}

	getColor( i:number ):string{
		return this.colorAry[i];
		//using values as below results in errors complaining about the expresion changing.
		// return this.colorAry[ Math.floor( this.colorAry.length * Math.random() )]
	}

}//DiveSiteListComponent
