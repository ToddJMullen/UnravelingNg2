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
	siteAry:DiveSite[]	= DiveSite.BestSites;
	currentView:string	= this.Views.LIST;
	newSiteId:number;

	navigateTo(view:string):void{
		console.log("DiveAppComponent::navigateTo()", view);
		this.currentView = view;
	}

	addSite(){
		this.newSiteId = this.siteAry
							.map( s => s.id )
							.reduce( (p,c) => p < c ? c : p ) + 1;
		this.navigateTo( this.Views.ADD );
	}//addSite()

	siteAdded( newSiteName:string ){
		console.log("DiveAppComponent::siteAdded()", arguments );
		this.siteAry.push( <DiveSite>{id: this.newSiteId, name: newSiteName} );
	}

}//DiveAppComponent
