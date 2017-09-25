import {Component, Input, Output, EventEmitter} from '@angular/core';
import {OnChanges}	from "@angular/core";

//import {DiveSite} from './dive-site';//no longer needed since "those" are handled in their service
import {SiteMgmtService}	from "./site-mgmt.service";

@Component({
  selector: 'delete-site-view',
  templateUrl: 'app/delete-site.template.html'
})
export class DeleteSiteComponent implements OnChanges {
  @Input() siteId:number;
//  @Output() onDeleted = new EventEmitter();
//  @Output() onCancel = new EventEmitter();
	@Output() onClosed = new EventEmitter();
	siteName:string;
//	maxDepth:number
	
	constructor( private siteService:SiteMgmtService ){}
	
	ngOnChanges(){
		let site = this.siteService.getSiteById( this.siteId );
		this.siteName = site.name;
//		this.maxDepth = site.maxDepth;
	}
	
	doDelete(){
		this.siteService.deleteSite(this.siteId);
		this.onClosed.emit(null);
	}
	
	doCancel(){
		this.onClosed.emit(null);
	}

//  deleted() {
//    this.onDeleted.emit(null);
//  }
//
//  cancel() {
//    this.onCancel.emit(null);
//  }
}
