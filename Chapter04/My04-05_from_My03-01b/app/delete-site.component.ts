//import {Component, Input, Output, EventEmitter} from '@angular/core';
//import {OnChanges}	from "@angular/core";
import {Component} from '@angular/core';
import { Router, ActivatedRoute }	from "@angular/router";

//import {DiveSite} from './dive-site';//no longer needed since "those" are handled in their service
import {SiteMgmtService}	from "./site-mgmt.service";

@Component({
  selector: 'delete-site-view',
  templateUrl: 'app/delete-site.template.html'
})
export class DeleteSiteComponent{// implements OnChanges {
//  @Input() siteId:number;
//  @Output() onDeleted = new EventEmitter();
//  @Output() onCancel = new EventEmitter();
//	@Output() onClosed = new EventEmitter();
	siteId:number;
	siteName:string;
//	maxDepth:number

	constructor(
		private siteService:SiteMgmtService
		,private route:ActivatedRoute
		,private router:Router
	){
		this.siteId = this.route.snapshot.params["id"];
		this.siteName = this.siteService.getSiteById( this.siteId ).name;
	}

//	ngOnChanges(){
//		let site = this.siteService.getSiteById( this.siteId );
//		this.siteName = site.name;
////		this.maxDepth = site.maxDepth;
//	}

	doDelete(){
		console.log("DeleteSiteComponent::doDelete()", this.siteId );
		this.siteService.deleteSite(this.siteId);
		this.router.navigate([this.siteService.Paths.LIST]);//go back home
//		this.onClosed.emit(null);
	}

	doCancel(){
//		this.onClosed.emit(null);
		this.router.navigate([this.siteService.Paths.LIST]);
	}

//  deleted() {
//    this.onDeleted.emit(null);
//  }
//
//  cancel() {
//    this.onCancel.emit(null);
//  }
}
