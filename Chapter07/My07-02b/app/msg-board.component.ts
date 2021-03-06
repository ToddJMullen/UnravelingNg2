import {Component} from "@angular/core";

import {MsgBusService} from "./msg-bus.service";


@Component({
	selector: "msg-board"
	,templateUrl: "app/msg-board.component.html"
// 	,template:`
// <div class="col-xs-2 pull-right">
// <b>MsgBoard</b>
// <ol>
// 	<li *ngFor="let msg of msgAry">{{msg}}</li>
// </ol>
// </div>`
	,styles: [`
.msg-board{
	background-color: #cfe;
	border: 1px inset teal;
	text-align: center;
	opacity: .55;
	width: 50%; height: 50%;
	position: fixed; top: 75px; right: 5px;
	overflow-y: auto;
}
	`]
})
export class MsgBoardComponent{

	msgAry:string[] = [];

	constructor(
		//injected vars
		private msgBus:MsgBusService
	){
		this.msgBus.messageStream.subscribe(
			msg => this.msgAry.push( msg )
		)
	}

}
