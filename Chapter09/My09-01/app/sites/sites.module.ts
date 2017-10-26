import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {siteRoutingModule} from "./site.routes"
import {SiteComponent} from "./site.component";
import {SiteListComponent} from './site-list.component';
import {AddSiteComponent} from './add-site.component';
import {EditSiteComponent} from './edit-site.component';
import {DeleteSiteComponent} from './delete-site.component';
import {SiteManagementService} from './site-management.service'

@NgModule({
  imports: [
    BrowserModule
    ,RouterModule
	,siteRoutingModule
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
export class SitesModule { }
