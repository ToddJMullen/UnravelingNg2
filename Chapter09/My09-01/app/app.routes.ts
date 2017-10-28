import {Routes, RouterModule}	from "@angular/router";
import {WelcomeComponent}		from "./welcome/welcome.component";
import {SiteListComponent}		from "./sites/site-list.component";
import {DiveLogComponent}		from "./logs/dive-log.component";

//add injectable guards
import {CanDeavtivateGuard}			from "./routing/can-deactivate.guard";

//add subroute module(s)
//import {siteRoutes}				from "./sites/site.routes";
//switching ^^^ to lazy load

//add login elements
import {UserAuthService}		from "./login/user-auth.service"
import {LoggedInGuard} 			from "./login/logged-in.guard"
import {LoginComponent}			from "./login/login.component";


const routeAry:Routes = [
	{path: "divelogs", component: DiveLogComponent
		,canActivate: [LoggedInGuard]}
	,{path: "login", component: LoginComponent }
	,{path: "", pathMatch: "full", component: WelcomeComponent }
//	, ...siteRoutes
	//replace single sites/ path with all site sub-routes
	,{path: "sites"//replace with static sub-routes to on-demand lazy loading
	  	,loadChildren: "app/sites/site.module#SiteModule"}
];

export const routingModule = RouterModule.forRoot( routeAry );

export const routingProviders	= [
	LoggedInGuard
	,UserAuthService
	,CanDeavtivateGuard
]
