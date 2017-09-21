import {Component, Output, EventEmitter}		from "@angular/core";

@Component({
	selector: "add-dive-site"
	,templateUrl: "app/add-dive-site.template.html"
})
export class AddDiveSiteComponent{
	@Output() onAdded = new EventEmitter();
	@Output() onCancel = new EventEmitter();

	added(){
		console.log("AddDiveSiteComponent::added()", arguments );
		this.onAdded.emit(null);
	}

	cancel(){
		console.log("AddDiveSiteComponent::cancel()", arguments );
		this.onCancel.emit(null);
	}

}//AddDiveSiteComponent
