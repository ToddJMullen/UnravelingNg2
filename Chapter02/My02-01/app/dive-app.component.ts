import {Component} from "@angular/core";

import {DiveSite}	from "./dive-site";

@Component({
	selector: "dive-app"
	,templateUrl: "app/dive-app.template.html"
})
export class DiveAppComponent{

	//internal properties
	Views = {
		LIST: "list"
		,ADD: "add"
	}
	siteAry:DiveSite[]	= DiveSite.BestSites;
	currentView:string	= this.Views.LIST;
	newSiteId:number;


	// internal methods
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

	// siteAdded( newSite:DiveSite ){
	// 	console.log("DiveAppComponent::siteAdded()", newSite );
	siteAdded( newSiteName:string ){
		console.log("DiveAppComponent::siteAdded()", newSiteName );
		// this.siteAry.push( newSite );
		this.siteAry.push( {id: this.newSiteId, name: newSiteName, maxDepth: 123} );
		this.navigateTo( this.Views.LIST );
	}

}//DiveAppComponent
