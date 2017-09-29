import {Injectable} from "@angular/core";

import {DiveLogEntry} from "./dive-log-entry";

@Injectable()
export class DiveLogApi{

	static MS_DELAY_API:number = 1000;

	//so far the only method will return the div logs
	getDives(){
		return DiveLogEntry.BaseDives;
	}
}
