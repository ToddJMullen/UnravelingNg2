import {NgModule}		from '@angular/core';
//import {BrowserModule}	from '@angular/platform-browser';
import {CommonModule}	from "@angular/common";
import {RouterModule}	from '@angular/router';

import {SiteComponent}			from "./site.component";
import {SiteListComponent}		from './site-list.component';
import {AddSiteComponent}		from './add-site.component';
import {EditSiteComponent}		from './edit-site.component';
import {DeleteSiteComponent}	from './delete-site.component';
import {SiteManagementService}	from './site-management.service'

import {sitesRoutingModule}		from "./site.routes";

@NgModule({
  imports: [
//    BrowserModule
	  CommonModule
    ,RouterModule
	,sitesRoutingModule
  ],
  declarations: [
	  SiteComponent,
    SiteListComponent,
    AddSiteComponent,
    EditSiteComponent,
    DeleteSiteComponent
  ],
  providers: [SiteManagementService]
})
export class SiteModule { }
