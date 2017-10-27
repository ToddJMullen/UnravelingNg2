import {NgModule}		from "@angular/core";
import {BrowserModule}	from "@angular/platform-browser"

import {UserAuthService} from "./login/user-auth.service";

import {AppComponent}	from "./app.component";
import {LoginComponent} from "./login/login.component"
import {LoginModule}	from "./login/login.module"

import {WelcomeModule}	from "./welcome/welcome.module";
import {DiveLogModule}	from "./logs/dive-log.module";
import {SiteModule}		from "./sites/site.module";


import {routingModule, routingProviders} from "./app.routes";

@NgModule({
	imports: [
		BrowserModule
		,WelcomeModule
		,DiveLogModule
		,SiteModule
		,routingModule
		,LoginModule
	]
	,declarations: [
		AppComponent
//		,LoginComponent
	]
	,providers: [
//		UserAuthService
		routingProviders
	]
	,bootstrap: [AppComponent]
})
export class AppModule{}
