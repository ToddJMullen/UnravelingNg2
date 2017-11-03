import {Component, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from "@angular/router";

import {SiteManagementService} from './site-management.service'
import {DeactivatableComponent} from "../routing/can-deactivate.guard";

@Component({
  selector: 'add-site-view',
  templateUrl: 'app/sites/add-site.template.html'
})
export class AddSiteComponent
	implements DeactivatableComponent{

	siteName: string = "";
	ogSiteName:string = "";

  constructor(
		private siteService: SiteManagementService
		,private router: Router
		,private currentRoute:ActivatedRoute
	) { }

  add() {
    this.siteService.addSite({id: 0, name:this.siteName});
	  this.ogSiteName = this.siteName;
//    this.router.navigate(['/list']);
	  this.router.navigate(['..'], {relativeTo: this.currentRoute});
  }//add()

	//the check if they can leave is to see if they have entered anything for the site name
	allowLeave = () => this.siteName == this.ogSiteName;
	confirmPrompt = () => "You not finished!";


}//AddSiteComponent()
