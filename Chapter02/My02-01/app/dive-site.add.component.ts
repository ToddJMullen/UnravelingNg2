import {Component, Input, Output, EventEmitter}		from "@angular/core";

import {DiveSite}	from "./dive-site";

@Component({
	selector: "dive-site-add-view"
	,templateUrl: "app/dive-site.add.template.html"
	,styles: [`
		h3{
			font-weight: bold;
			color: maroon;
		    text-decoration: underline;
		}
	`]
})
export class DiveSiteAddComponent{

	//markup properties
	@Input() givenSiteId:number;

	//internal
	newSiteName:string;
	newMaxDepth:number = 1;


	//internal methods
	@Output() onSiteAdded = new EventEmitter<DiveSite>();
	// @Output() onSiteAdded = new EventEmitter<string>();
	addSite(){
		console.log("AddDiveSiteComponent::addSite()", this.newSiteName, this.newMaxDepth );
		if( this.newSiteName.length == 0 ){
			return;//prevent the enter key binding from saving an empty site name
		}
		// this.onSiteAdded.emit( this.newSiteName );
		this.onSiteAdded.emit( {id:this.givenSiteId, name: this.newSiteName, maxDepth: this.newMaxDepth} );
	}

	@Output() onCancel = new EventEmitter();
	cancel(){
		console.log("AddDiveSiteComponent::cancel()" );
		this.onCancel.emit(null);
	}

}//DiveSiteAddComponent
