import {Injectable} from "@angular/core";
import {Http}   from "@angular/http";
import 'rxjs/add/operator/toPromise';

import {DiveLogEntry} from "./dive-log-entry";

@Injectable()
export class DiveLogApi{

	static MS_DELAY_API:number = 1000;
	static CALLS_TO_FAIL:number = 3;
	static callsMade:number = 0;

    private URI_DIVE_LOG_API = "http://unraveling-ng.azurewebsites.net/api/backendtest/dives";

	//so far the only method will return the div logs
	getDives():Promise<DiveLogEntry[]>{
//		return DiveLogEntry.BaseDives;//old boredom stuff
//      Brackets is complaining about this promise saying:
//      "Promise refers to a type, but is being used as a value here" (still works though)
//		return new Promise<DiveLogEntry[]>( (onResolve, onReject) => {
//			setTimeout( () => {
//
//				if( DiveLogApi.callsMade++ % DiveLogApi.CALLS_TO_FAIL == 0 ){
//					onReject(`${DiveLogApi.callsMade} calls to this service is too many! Go away!! 8b`);
//				} else {
//					onResolve( DiveLogEntry.BaseDives );
//				}
//
//			}, DiveLogApi.MS_DELAY_API );
//		});
	}

}//DiveLogApi
