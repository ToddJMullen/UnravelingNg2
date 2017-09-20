import {Component} from '@angular/core';
import {DiveSite} from './dive-site';

@Component({
  selector: 'dive-site-list',
  templateUrl: 'app/dive-site-list.template.html'
})
export class DiveSiteListComponent {
  siteAry = DiveSite.BestSites;
}
