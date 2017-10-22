//import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Component}	from "@angular/core";
import {Router, ActivatedRoute}	from "@angular/router";

import {DiveSite}	from "./dive-site";
import {SiteMgmtService}	from "./site-mgmt.service";

@Component({
  selector: 'edit-site-view',
  templateUrl: 'app/edit-site.template.html'
})
export class EditSiteComponent {
//	@Output() onClosed = new EventEmitter();

//	@Input() siteId:number;//this kind of binding can't work, we need to attack the value to an event
//	private _siteId:number;
//	@Input() set siteId( id:number ){
//		console.log("EditSiteComponent::setSiteId(): ", this._siteId );
//		this._siteId = id;
//		let site = this.siteService.getSiteById( this._siteId );
//		if( site ){
//			this.siteName = site.name;
//			this.maxDepth = site.maxDepth;
//		}
//
//	}
	siteId:number;
	site:DiveSite;
	siteName:string;
	maxDepth:number;

	constructor(
		private siteService:SiteMgmtService
		,private route:ActivatedRoute
		,private router:Router
	){

		this.siteId		= this.route.snapshot.params["id"]
		this.site 		= this.siteService.getSiteById( this.siteId );
		this.siteName	= this.site.name;
		this.maxDepth	= this.site.maxDepth;
//		console.log("EditSiteComponent() siteId: ", this.siteId );
		//on construction, this.siteId is a semi-meaningless value from the list view
		//it won't have a meaningful value until a runtime click event "picks" the siteId value
		//so we attach a setter method to the @Input event & trigger the load when it's fired (as above)
//		let site = this.siteService.getSiteById( this.siteId );
//		if( site ){
//			this.siteName = site.name;
//			this.maxDepth = site.maxDepth;
//		}
	}

	doSave():void{
		this.siteService.saveSite( {id: this.siteId, name: this.siteName, maxDepth: this.maxDepth} );
		this.router.navigate( [this.siteService.Paths.LIST] );
//		this.onClosed.emit(null);
	}

//	doCancel():void{
//		this.onClosed.emit(null);
//	}


}//EditSiteComponent
