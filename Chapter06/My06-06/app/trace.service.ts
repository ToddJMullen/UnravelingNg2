import {Injectable} from "@angular/core";

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

	constructor(){
		this.instance = ++AdvancedTraceService.counter;
	}

	trace(msg:string, src){
		if( src ){
			msg = `${src.constructor.name}::${msg}`;
		}
		console.log(`Tracer ${this.instance}\n${this.info}\nReceived:\n${msg}`);
	}

}
