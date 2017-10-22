import {Component, Optional} from '@angular/core';

import {TraceService} from "./trace.service";

@Component({
  selector: 'yw-app',
  template: `
    <div class="container-fluid">
      <h3>Diving Gear Checklist</h3>
      <div class="row">
        <diver *ngFor="let diver of divers"
          [name]="diver"
          [items]="items">
        </diver>
      </div>
    </div>
  `
  ,styles: [`
h1,.row{font-size:14px;}
`]
})
export class AppComponent {
  divers = ['Joe', 'Cecile', 'Martha', 'Steve']
  items = ['Mask', 'Fins', 'Regulator']

	constructor(
		@Optional() private log:TraceService
	){
		if( this.log ){
			this.log.trace(`construct(),\ndivers: ${this.divers},\nitems: ${this.items}`, this)
		}
	}

}
