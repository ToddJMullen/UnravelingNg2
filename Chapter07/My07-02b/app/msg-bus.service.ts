import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class MsgBusService{

	private messageSource = new Subject<string>();

	messageStream = this.messageSource.asObservable();

	postMessage(message:string){
		console.log("MsgBusService::postMessage(), received: ", message );
		this.messageSource.next(message);
	}
}

