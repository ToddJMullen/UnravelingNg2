import {Injectable} from "@angular/core";

import {DiveLogEntry} from "./dive-log-entry";

@Injectable()
export class DiveLogApi{

	//so far the only method will return the div logs
	getDives(){
		return DiveLogEntry.BaseDives;
	}
}
