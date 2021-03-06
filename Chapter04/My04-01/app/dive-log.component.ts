import {Component} from "@angular/core";

//import {ContentFilterPipe}	from "./content-filter-pipe";
import {DiveLogEntry}		from "./dive-log-entry";
import {DiveLogApi}			from "./dive-log-api.service";

@Component({
	selector:"dive-log"
	,templateUrl: "./app/dive-log.template.html"
	,styles: [`
.alert{margin: 20px; text-align:center; font-size: 27px;}
`]
})
export class DiveLogComponent{


	loading:boolean = false;
	diveAry:DiveLogEntry[];
	errorMsg:string;

	constructor( private diveLogApi:DiveLogApi ){
		console.log("DiveLogComponent()");
	}


	refreshDives(){
		console.log("DiveLogComponent::refreshDives()");

		this.loading = true;
		this.diveAry = [];

		this.diveLogApi
			.getDives()//returns a Promise of DiveLogEntry[] now
			//note - this uses the "traditional" 2 param success,error callback signature
//			.then( logAry => {
//					this.diveAry = logAry;
//					this.loading = false;
//				}, errMsg => {
//					this.loading = false;
//					this.errorMsg = errMsg;
//			});
			//I prefer the "method chaining" style though
			.then( logAry => {
				this.loading = false;
				this.diveAry = logAry;
				this.errorMsg = null;
			})
			.catch( errMsg => {
				this.loading = false;
				this.errorMsg = errMsg;
		});


//Original faux async response
//the response will be a promise now & the fauz delay will be in the API class
//		setTimeout( () => {
//			this.diveAry = this.diveLogApi.getDives();
//		}, DiveLogApi.MS_DELAY_API );

//for reference/ memory/ understanding purposes
//the arrow fn above is equivalent to the following "usual" ES5 implementation
//		var diveLogComponent = this;
//		setTimeout( function(){
//			diveLogComponent.diveAry = diveLogComponent.diveLogApi.getDives()
//		}, DiveLogApi.MS_DELAY_API );

	}//refreshDives()



}//DiveLogComponent
