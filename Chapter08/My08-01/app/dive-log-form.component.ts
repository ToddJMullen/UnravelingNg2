import {Component} from '@angular/core';

import {DiveLogEntry} from "./dive-log-entry.iface";
import {SpecialDivesEnum} from "./SpecialDives.enum";

@Component({
  selector: 'dive-log-form',
  templateUrl: 'app/dive-log-form.template.html'
})
export class DiveLogFormComponent {

	specialDivesAry:string[] = SpecialDivesEnum.toArray();

	entry: DiveLogEntry = {
		site: "Barnes & Noble"
		,location: "Dale Mabry in Tampa"
		,depth: 1
		,time: 150
		,isFavorite: true
		,special: SpecialDivesEnum.DEEP_DIVE
	}

}
