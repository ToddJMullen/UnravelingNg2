import {Routes, RouterModule}	from "@angular/router";
import {WelcomeComponent}		from "./welcome/welcome.component";
import {SiteListComponent}		from "./sites/site-list.component";
import {DiveLogComponent}		from "./logs/dive-log.component";

//add subroute module(s)
import {siteRoutes}				from "./sites/site.routes";
//add login elements
import {UserAuthService}		from "./login/user-auth.service"
import {LoggedInGuard} 			from "./login/logged-in.guard"
import {LoginComponent}			from "./login/login.component";


const routeAry:Routes = [
	{path: "divelogs", component: DiveLogComponent
		,canActivate: [LoggedInGuard]}
	,{path: "login", component: LoginComponent }
	,{path: "", pathMatch: "full", component: WelcomeComponent }
	, ...siteRoutes
	//replace single sites/ path with all site sub-routes
];

export const routingModule = RouterModule.forRoot( routeAry );

export const routingProviders	= [
	LoggedInGuard
	,UserAuthService
]
