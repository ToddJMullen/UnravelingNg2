import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {SiteManagementService} from './site-management.service'
import {DeactivatableComponent} from "../routing/can-deactivate.guard";


@Component({
  selector: 'edit-site-view',
  templateUrl: 'app/sites/edit-site.template.html'
})
export class EditSiteComponent
	implements DeactivatableComponent{

  siteId: number;
  siteName: string;
  private parSub: any;

	ogSiteName:string = "";

  constructor(
    private siteService: SiteManagementService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.siteId = this.route.snapshot.params['id'];
    this.siteName = this.siteService.getSiteById(this.siteId).name;
	this.ogSiteName = this.siteName;
  }

  save() {
    this.siteService.saveSite({id: this.siteId, name:this.siteName});
	this.ogSiteName = this.siteName;
    this.router.navigate(['../..'], {relativeTo: this.route});
  }


//	allowLeave = () => this.siteName == this.ogSiteName;
//	confirmPrompt = () => "You not finished!";


	allowLeave(){
		return this.siteName == this.ogSiteName;
	}
	confirmPrompt(){
		"You sure? You forgot to save!"
	}
}
