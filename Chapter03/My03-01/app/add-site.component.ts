import {Component, Input, Output, EventEmitter} from '@angular/core';

import {SiteMgmtService}	from "./site-mgmt.service";

@Component({
  selector: 'add-site-view',
  templateUrl: 'app/add-site.template.html'
})
export class AddSiteComponent {

	@Output() onClosed = new EventEmitter();

	@Input() siteId: number;

	siteName: string;
	maxDepth: number;

	constructor( private siteService:SiteMgmtService ){
//		this.siteService is created automatically
	}

//	@Output() onAdded = new EventEmitter<string>();
	doAdd() {
		if (this.siteName) {
			this.siteService.addSite( {id:0, name: this.siteName, maxDepth: this.maxDepth } );
			this.onClosed.emit(null);
//			this.onAdded.emit(this.siteName);
		}
	}

//	@Output() onCancel = new EventEmitter();
	doCancel() {
//		this.onCancel.emit(null);
		this.onClosed.emit(null);
	}
}
