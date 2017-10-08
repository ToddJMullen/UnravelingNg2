import {Injectable} from "@angular/core";

@Injectable()
export class TraceService{
	trace( msg:string, src ):void{
		if( src ){
			msg = src.constructor.name + ": " + msg;
		}
		console.log(msg);
	}
}
