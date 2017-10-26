import {Routes, RouterModule}	from "@angular/router";
import {WelcomeComponent}		from "./welcome/welcome.component";
import {SiteListComponent}		from "./sites/site-list.component";
import {DiveLogComponent}		from "./logs/dive-log.component";

//add subroute module(s)
import {siteRoutes}				from "./sites/site.routes";


const routeAry:Routes = [
	{path: "divelogs", component: DiveLogComponent }
	,{path: "", pathMatch: "full", component: WelcomeComponent }
	, ...siteRoutes
	//replace single sites/ path with all site sub-routes
];

export const routingModule = RouterModule.forRoot( routeAry );
