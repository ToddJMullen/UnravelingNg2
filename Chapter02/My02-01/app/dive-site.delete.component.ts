
import {Component, Input, Output, EventEmitter}		from "@angular/core";

import { DiveSite }		from "./dive-site";

@Component({
	selector: "dive-site-delete-view"
	,templateUrl: "app/dive-site.delete.template.html"
})
export class DiveSiteDeleteComponent{

	@Input() deletedSite:DiveSite

	@Output() onDelete = new EventEmitter<number>();
	deleteSite():void{
		console.log("DiveDeleteComponent::onDelete()", this.deletedSite );
		this.onDelete.emit( this.deletedSite.id );
	}

	@Output() onCancel = new EventEmitter();
	cancel():void{
		console.log("DiveDeleteComponent::cancel()")
		this.onCancel.emit(null);
	}

}///DiveSiteDeleteComponent
