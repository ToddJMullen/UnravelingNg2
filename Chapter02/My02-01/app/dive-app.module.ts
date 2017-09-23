import {NgModule}		from '@angular/core';
import {BrowserModule}	from '@angular/platform-browser';

import {DiveAppComponent}			from './dive-app.component';
import {DiveSiteListComponent}		from './dive-site.list.component'
import {DiveSiteAddComponent}		from "./dive-site.add.component"
import {DiveSiteEditComponent}		from "./dive-site.edit.component";
import {DiveSiteDeleteComponent}	from "./dive-site.delete.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [//tell angular about the classes & views that it needs to know about to build the app.
    DiveAppComponent
    ,DiveSiteListComponent
	,DiveSiteAddComponent
	,DiveSiteEditComponent
	,DiveSiteDeleteComponent
  ],
  bootstrap: [DiveAppComponent]
})
export class DiveAppModule { }
