import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {routing} from "./app.routes";
import {AppComponent} from './app.component';
import {SiteListComponent} from './site-list.component';
import {AddSiteComponent} from './add-site.component';
import {EditSiteComponent} from './edit-site.component';
import {DeleteSiteComponent} from './delete-site.component';

import {SiteMgmtService}   from "./site-mgmt.service";

import {ActionableDirective}   from "./actionable.directive";

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        SiteListComponent,
        AddSiteComponent,
        EditSiteComponent,
        DeleteSiteComponent,

        ActionableDirective
    ],
    providers: [SiteMgmtService],
    bootstrap: [AppComponent]
})
export class AppModule { }
