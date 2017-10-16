import {Component} from "@angular/core";
import {OnInit, AfterViewInit, AfterContentInit} from "@angular/core";

@Component({
	selector: "my-app"
	,template: `
<div class="container-fluid">
	<app-messages [messageAry]="logMessageAry">
		<header><h2>Messages Logged</h2></header>
		<footer><h2>...End of messages</h2></footer>
	</app-messages>
</div>
`
})
export class AppComponent
 implements OnInit, AfterViewInit, AfterContentInit{

	 logMessageAry:string[] = [];
	 count = 0;

	 constructor(){
		 this.log("constructor()");
	 }

	 ngOnInit(){
		 this.log("ngOnInit()");
	 }

	ngAfterViewInit(){
		this.log("ngAfterViewInit()");
	}

	 ngAfterContentInit(){
		 this.log("ngAfterContentInit()");
	 }

	log( msg:string){
		this.logMessageAry.push( msg );
	}
}
