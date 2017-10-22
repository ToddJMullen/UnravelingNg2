import {Injectable, Inject} from "@angular/core";

import {OPAQUE_VERSION} from"./opaque-version.token"

@Injectable()
export class TraceService{
	trace( msg:string, src ):void{
		if( src ){
			msg = `${src.constructor.name}: ${msg}`;
		}
		console.log(msg);
	}
}

@Injectable()
export class AdvancedTraceService{

	static counter:number = 0;
	instance: number;
    info:string;

	constructor(
        @Inject(OPAQUE_VERSION) private version:string
    ){
		this.instance = ++AdvancedTraceService.counter;
	}

	trace(msg:string, src){
		if( src ){
			msg = `${src.constructor.name}::${msg}`;
		}
		console.log(`Tracer ${this.instance}, Info: ${this.info}, Version: ${this.version}\nReceived: ${msg}`);
	}

}
