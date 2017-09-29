import {Component} from "@angular/core";

import {ContentFilterPipe}	from "./content-filter-pipe";
import {DiveLogEntry}		from "./dive-log-entry";
import {DiveLogApi}			from "./dive-log-api.service";

@Component({
	selector:"dive-log"
	,templateUrl: "./dive-log.template.html"
})
export class DiveLogComponent{

	MS_DELAY_API:number = 1000;

	loading:boolean = false;
	diveAry:DiveLogEntry[];

	constructor( private diveLogApi:DiveLogApi ){
		console.log("DiveLogComponent()");
	}


	refreshDives(){
		console.log("DiveLogComponent::refreshDives()");

		this.loading = true;
		this.diveAry = [];
		setTimeout( () => {
			this.diveAry = this.diveLogApi.getDives();
		}, this.MS_DELAY_API );

//for reference/ memory/ understanding purposes
//the arrow fn above is equivalent to the following "usual" ES5 implementation
//		var diveLogComponent = this;
//		setTimeout( function(){
//			diveLogComponent.diveAry = diveLogComponent.diveLogApi.getDives()
//		}, this.MS_DELAY_API );

	}



}//DiveLogComponent
