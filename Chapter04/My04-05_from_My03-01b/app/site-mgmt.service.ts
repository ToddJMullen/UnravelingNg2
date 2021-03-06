import {Injectable}	from "@angular/core";

import {DiveSite}	from "./dive-site";


@Injectable()
export class SiteMgmtService{

    Paths = {//doesn't work when referenced in the view templates. =/
        LIST: "/list"
        ,ADD: "/add"
        ,EDIT: "/edit"
        ,DELETE: "/delete"
    };

	private siteAry:DiveSite[] = DiveSite.FavoriteSites.slice(0);

	getAllSites():DiveSite[]{
		return this.siteAry.slice(0);
	}

	getSiteById( id:number ):DiveSite{
		let site = this.siteAry.filter( s => s.id == id )[0];
		return site ? {id: site.id, name: site.name, maxDepth: site.maxDepth } : null;
	}

	addSite( newSite:DiveSite ):void{
		//convert to id array, then pick the highest value & add 1
		newSite.id = this.siteAry.map(s => s.id).reduce( (a,b) => a > b ? a : b ) + 1;
		this.siteAry.push( newSite );
	}

	saveSite( site:DiveSite ):void{
		let og = this.siteAry.filter( s => s.id == site.id )[0];
		if( og ){
			og.name = site.name;
            og.maxDepth = site.maxDepth;
		}
	}

	deleteSite( siteId:number ):void{
		let og = this.siteAry.filter( s => s.id == siteId )[0];
		if( og ){
			let idx = this.siteAry.indexOf( og );
			if( idx > -1 ){
				this.siteAry.splice(idx,1);
			}
		}
	}


}//SiteMgmtService
