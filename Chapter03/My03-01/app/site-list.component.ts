import {Component, Input, Output, EventEmitter} from '@angular/core';

import {DiveSite} 			from './dive-site';
import {SiteMgmtService}    from "./site-mgmt.service";

@Component({
  selector: 'site-list-view',
  templateUrl: 'app/site-list.template.html',
  styles: [`
    .evenRow {
      background-color: #ddffdd;
    }

    .topRow {
      border-top: 2px solid #308080;
    }

    .bottomRow {
      border-bottom: 2px solid #808030;
    }
  `]
})
export class SiteListComponent {
	@Input() siteAry;

	constructor( private siteService:SiteMgmtService ){
		this.siteAry = siteService.getAllSites();
	}

	@Output() onAdd = new EventEmitter();
	add() {
		this.onAdd.emit(null);
	}

	@Output() onEdit = new EventEmitter<number>();
	edit( siteId:number) {
		this.onEdit.emit(siteId);
	}

	@Output() onDelete = new EventEmitter<DiveSite>();
	delete(site: DiveSite) {
		this.onDelete.emit(site);
	}
}
