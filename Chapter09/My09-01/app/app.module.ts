import {NgModule}		from "@angular/core";
import {BrowserModule}	from "@angular/platform-browser"

import {AppComponent}	from "./app.component";

import {WelcomeModule}	from "./welcome/welcome.module";
import {DiveLogModule}	from "./logs/dive-log.module";
import {SiteModule}		from "./sites/site.module";


import {routingModule} from "./app.routes";

@NgModule({
	imports: [
		BrowserModule
		,WelcomeModule
		,DiveLogModule
		,SiteModule
		,routingModule
	]
	,declarations: [
		AppComponent
	]
	,bootstrap: [AppComponent]
})
export class AppModule{}
