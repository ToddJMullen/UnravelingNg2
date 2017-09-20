import {Component} from "@angular/core";

@Component({
	selector: "dive-app"
	,template: `
	<div class="container-fluid">
		<h1>Dive Sites Maintenance View</h1>
		<dive-site-list></dive-site-list>
	</div>
	`
})
export class DiveAppComponent{}
