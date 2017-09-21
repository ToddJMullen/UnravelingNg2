import {Component} from "@angular/core";

import {DiveSite}	from "./dive-site";

@Component({
	selector: "dive-app"
	,templateUrl: "app/dive-app.template.html"
})
export class DiveAppComponent{
	Views = {
		LIST: "list"
		,ADD: "add"
	}
	siteAry = DiveSite.BestSites;
	currentView = this.Views.LIST;

	navigateTo(view:string):void{
		console.log("DiveAppComponent::navigateTo()", view);
		this.currentView = view;
	}

}//DiveAppComponent
