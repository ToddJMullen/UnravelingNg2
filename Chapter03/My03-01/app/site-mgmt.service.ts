import {Injectable}	from "@angular/core";

import {DiveSite}	from "./dive-site";


@Injectable()
export class SiteMgmtService{
	
	private siteAry:DiveSite[] = DiveSite.FavoriteSites.slice(0);

	getAllSites():DiveSite[]{
		return this.siteAry.slice(0);
	}

	getSiteById( id:number ):DiveSite{
		let site = this.siteAry.filter( s => s.id == id )[0];
		return site ? {id: site.id, name: site.name, maxDepth: site.maxDepth } : null;
	}

	addSite( newSite:DiveSite ):void{
		newSite.id = this.siteAry.map(s => s.id).reduce( (a,b) => a > b ? a : b );
		this.siteAry.push( newSite );
	}

	saveSite( site:DiveSite ):void{
		let og = this.siteAry.filter( s => s.id == site.id )[0];
		if( og ){
			og.name = site.name;
		}
	}
	
	deleteSite( site:DiveSite ):void{
		let og = this.siteAry.filter( s => s.id == site.id )[0];
		if( og ){
			let idx = this.siteAry.indexOf( og );
			if( idx > -1 ){
				this.siteAry.splice(idx,1);
			}
		}
	}


}//SiteMgmtService