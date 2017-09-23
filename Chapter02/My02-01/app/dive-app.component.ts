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
		,EDIT: "edit"
		,DELETE: "delete"
	}
	siteAry:DiveSite[]	= DiveSite.BestSites;
	siteData:DiveSite;
	currentView:string	= this.Views.LIST;
	newSiteId:number;


	// internal methods
	navigateTo( view:string ):void{
		console.log("DiveAppComponent::navigateTo()", view);
		this.currentView = view;
	}

	//creation

	addSite():void{
		this.newSiteId = this.siteAry
							.map( s => s.id )
							.reduce( (p,c) => p < c ? c : p ) + 1;
		this.navigateTo( this.Views.ADD );
	}//addSite()

	siteAdded( newSite:DiveSite ):void{
		console.log("DiveAppComponent::siteAdded()", newSite );
	// siteAdded( newSiteName:string ):void{
		// console.log("DiveAppComponent::siteAdded()", newSiteName );
		this.siteAry.push( newSite );
		// this.siteAry.push( {id: this.newSiteId, name: newSiteName, maxDepth: 123} );
		this.navigateTo( this.Views.LIST );
	}




	//editing
	editSite( site:DiveSite ):void{
		// use cloned properties in case of cancel
		this.siteData = {id: site.id, name: site.name, maxDepth: site.maxDepth};
		this.navigateTo( this.Views.EDIT );
	}

	saveEdits( site:DiveSite ):void{
		let oldSite = this.siteAry.filter( s => s.id == site.id )[0];
		if( oldSite ){
			oldSite.name		= site.name;
			oldSite.maxDepth	= site.maxDepth;
		}
		this.navigateTo( this.Views.LIST );
	}

	//deleting
	confirmDelete( site:DiveSite ):void{
		this.siteData = {id: site.id, name: site.name, maxDepth: site.maxDepth};
		this.navigateTo( this.Views.DELETE );
	}

	siteDeleted( id:number ):void{
		console.log("DiveAppComponent::siteDeleted(), id:", id);
		let idx = -1;
		this.siteAry.map( (site, i) => {
			if( site.id == id ){
				idx = i;
			}
		});
		if( idx > -1 ){
			this.siteAry.splice(idx,1);
		}
	}

}//DiveAppComponent
