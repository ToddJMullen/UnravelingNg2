import {Component} from '@angular/core';
import {Input, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms"

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

	ngOnInit(){
		console.log("DiveLogFormComponent::ngOnInit()");
		this.formDiveLog = new FormGroup({
			site		: new FormControl( this.entry.site, Validators.required )
			,location	: new FormControl( this.entry.location, Validators.required )
			,depth		: new FormControl( this.entry.depth, Validators.required )
			,time		: new FormControl( this.entry.time, Validators.required )
			,isFavorite	: new FormControl( this.entry.isFavorite )
			,special	: new FormControl( this.entry.special )
			,comments	: new FormControl( this.entry.comments )
		})
	}//ngOnInit()

	notvalid( name:string ):boolean{
		return this.formDiveLog.controls[ name ].invalid
	}

	doSubmit(){
		this.submitted = true;
		this.submittedDive = this.formDiveLog.value;
		return false;
	}//doSubmit()

}
