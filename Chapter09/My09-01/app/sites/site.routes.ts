import {Routes, RouterModule} from "@angular/router";
import {SiteComponent} from "./site.component";
import {SiteListComponent} from "./site-list.component";
import {AddSiteComponent} from "./add-site.component";
import {EditSiteComponent} from "./edit-site.component";
import {DeleteSiteComponent} from "./delete-site.component";
import {CanDeavtivateGuard} from "../routing/can-deactivate.guard";

export const siteRoutes: Routes = [
	{
//		path: "sites"//base for these paths
		path: ""//base for these paths now defined in lazy loading "trigger"
		,component: SiteComponent//the host we created for just this purpose
		,children: [
			{path: "", component: SiteListComponent }
			,{path: "add", component: AddSiteComponent, canDeactivate: [CanDeavtivateGuard] }
			,{path: "edit/:id", component: EditSiteComponent, canDeactivate: [CanDeavtivateGuard] }
			,{path: "drop/:id", component: DeleteSiteComponent }
		]
	}
]//siteRoutes

export const sitesRoutingModule = RouterModule.forChild( siteRoutes );
