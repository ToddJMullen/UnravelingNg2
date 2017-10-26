import {Routes, RouterModule} from "@angular/router";
import {SiteComponent} from "./site.component";
import {SiteListComponent} from "./site-list.component";
import {AddSiteComponent} from "./add-site.component";
import {EditSiteComponent} from "./edit-site.component";
import {DeleteSiteComponent} from "./delete-site.component";

export const siteRoutes: Routes = [
	{
		path: "sites"//base for these paths
		,component: SiteComponent//the host we created for just this purpose
		,children: [
			{path: "", component: SiteListComponent }
			,{path: "add", component: AddSiteComponent }
			,{path: "edit/:id", component: EditSiteComponent }
			,{path: "drop/:id", component: DeleteSiteComponent }
		]
	}
]//siteRoutes

export const siteRoutingModule = RouterModule.forChild( siteRoutes );


