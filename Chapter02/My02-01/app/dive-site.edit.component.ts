import {Component, Input, Output, EventEmitter } from "@angular/core";

import {DiveSite}	from "./dive-site";

@Component({
	selector: "dive-site-edit-view"
	,templateUrl: "app/dive-site.edit.template.html"
})
export class DiveSiteEditComponent{
	@Input() editSite:DiveSite;


	@Output() onSave = new EventEmitter<DiveSite>();
	saveSite():void{
		console.log("EditDiveSiteComponent::saveSite()");
		if( this.editSite.id ){
			this.onSave.emit( this.editSite );
		}
	}

	@Output() onCancel = new EventEmitter();
	cancel():void{
		console.log("EditDiveSiteComponent::cancel()");
		this.onCancel.emit(null);
	}




}//DiveSiteEditComponent
