import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";

import {DiveSite} 			from './dive-site';
import {SiteMgmtService}    from "./site-mgmt.service";

@Component({
  selector: 'site-list-view',
  templateUrl: 'app/site-list.template.html',
  styleUrls: ["app/site-list.styles.css"]//static resources must be root relative
//styles moved into separate file ^^^
})
export class SiteListComponent {
	@Input() siteAry;

	constructor(
        private siteService:SiteMgmtService
        ,private router:Router
    ){
		this.siteAry = siteService.getAllSites();
	}

	@Output() onAdd = new EventEmitter();
	add() {
		this.onAdd.emit(null);
	}

//	@Output() onEdit = new EventEmitter<number>();
	edit( siteId:number) {
//		this.onEdit.emit(siteId);
        this.router.navigate([this.siteService.Paths.EDIT, siteId])
	}

//    This just disappeared without mention
//	@Output() onDelete = new EventEmitter<DiveSite>();
//	delete(site: DiveSite) {
////		this.onDelete.emit(site);
//        this.router.navigate([this.siteService.Paths.DELETE, site.id])
//	}

}//SiteListComponent
