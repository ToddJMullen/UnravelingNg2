import {Injectable} from "@angular/core";

import {DiveLogEntry} from "./dive-log-entry";

@Injectable()
export class DiveLogApi{

	static MS_DELAY_API:number = 1000;
	static CALLS_TO_FAIL:number = 3;
	static callsMade:number = 0;

	//so far the only method will return the div logs
	getDives():Promise<DiveLogEntry[]>{
//		return DiveLogEntry.BaseDives;//old boredom stuff
		return new Promise<DiveLogEntry[]>( (onResolve, onReject) => {
			setTimeout( () => {

				if( DiveLogApi.callsMade++ % DiveLogApi.CALLS_TO_FAIL == 0 ){
					onReject(`${DiveLogApi.callsMade} calls to this servive is too many! Go away!! 8b`);
				} else {
					onResolve( DiveLogEntry.BaseDives );
				}

			}, DiveLogApi.MS_DELAY_API );
		});
	}

}//DiveLogApi
