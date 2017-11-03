import {Component} from '@angular/core';
import {Input, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms"
import {FormBuilder, AbstractControl} from "@angular/forms";

import {DiveLogEntry} from "./dive-log-entry.iface";
import {SpecialDivesEnum} from "./SpecialDives.enum";

@Component({
  selector: 'dive-log-form',
  templateUrl: 'app/dive-log-form.template.html'
  ,styleUrls: ["app/dive-log-form.styles.css"]
})
export class DiveLogFormComponent implements OnInit{

	submitted = false;
	submittedDive:DiveLogEntry;

	specialDivesAry:string[] = SpecialDivesEnum.toArray();

	entry: DiveLogEntry = {
		site: "Barnes & Noble"
		,location: "Dale Mabry in Tampa"
		,depth: 1
		,time: 150
		,isFavorite: true
		,special: SpecialDivesEnum.DEEP_DIVE
	}

	@Input() formDiveLog:FormGroup;

	validationMsgs	= {
		site: {
			required: "A site name is reuired"
		}
		,location: {
			required: "Site location is required"
		}
		,depth: {
			required: "Please provide a dive depth"
			,NaN: "Depth must be a number"
			,depth: "Depth must be between 0 and 275 feet"
		}
		,time: {
			required: "Please enter a dive time in minutes"
			,NaN: "Time must be a number"
			,time: "Time must be between 0 and 240 minutes"
		}
	}//validationMsgs

	constructor(
		private formBuilder: FormBuilder
	){
		console.log("DiveLogFormComponent()");
	}

	ngOnInit(){
		console.log("DiveLogFormComponent::ngOnInit()");
		// this.formDiveLog = new FormGroup({
		// 	site		: new FormControl( this.entry.site, Validators.required )
		// 	,location	: new FormControl( this.entry.location, Validators.required )
		// 	,depth		: new FormControl( this.entry.depth, Validators.required )
		// 	,time		: new FormControl( this.entry.time, Validators.required )
		// 	,isFavorite	: new FormControl( this.entry.isFavorite )
		// 	,special	: new FormControl( this.entry.special )
		// 	,comments	: new FormControl( this.entry.comments )
		// })
		this.formDiveLog = this.formBuilder.group({
			site		: [this.entry.site, Validators.required]
			,location	: [this.entry.location, Validators.required]
			,depth		: [this.entry.depth, [Validators.required, this.validateDepth]]
			,time		: [this.entry.time, [Validators.required, this.validateTime]]
			,isFavorite	: [this.entry.isFavorite]
			,special	: [this.entry.special]
			,comments	: [this.entry.comments]
		});
	}//ngOnInit()

	notvalid( name:string ):boolean{
		return this.formDiveLog.controls[ name ].invalid
	}

	validateDepth( ctrl: AbstractControl ):{[key:string]: any}{
		let val = ctrl.value;
		if( !val ){return null;}
		if( isNaN(val) ){
			return {NaN: true};
		} else {
			let depth = parseInt( val, 10 );
			if( depth >= 0 && depth <= 275 ){
				return null;
			}
		}
		return {depth: {min:0, max:275}};
	}//validateDepth()

	validateTime( ctrl: AbstractControl ):{[key:string]: any}{
		let val = ctrl.value;
		//required worries about empty values
		if( !val ){return null;}//this validator has nothing to say about that
		if( isNaN(val) ){
			return {NaN:true};
		} else {
			let time = parseInt( val, 10 );
			if( time >= 0 && time <= 240 ){
				return null;
			}
			return {time: {min:0, max: 240}};
		}
	}//validateTime()


	getValidationMsg( ctrlName:string ){
		console.log("getValidationMsg()", ctrlName );
		let errorMsg = ""
		,ctrl	= this.formDiveLog.get( ctrlName )
		;
		if( ctrl ){
			let msgData = this.validationMsgs[ ctrlName ];
			if( msgData && ctrl.errors ){
				for( const key in ctrl.errors ){
					errorMsg += msgData[key];
				}
			}
		}
		return errorMsg ? errorMsg : "Invalid input"
	}

	doSubmit(){
		this.submitted = true;
		this.submittedDive = this.formDiveLog.value;
		return false;
	}//doSubmit()

}
