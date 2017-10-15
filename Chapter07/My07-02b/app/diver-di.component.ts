import { Component } from '@angular/core';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { OnChanges } from "@angular/core";

import {MsgBusService} from "./msg-bus.service";
import {GameComponent}	from "./game.component";



@Component({
  selector: 'yw-diver-di',
  templateUrl: 'app/diver-di.template.html'
  ,styles: [`
  yw-diver-di{
  	background-color:#efe;
  }
  `]
})
export class DiverDiComponent implements OnInit, OnChanges {


  @Input() diverName:string;

  cheaterTokens:number;
  tokensFound:number = 0;

  constructor(
  	private gameCtx:GameComponent
	,private msgBus:MsgBusService
  ){
  	console.log("DiverDiComponent()");
  	this.cheaterTokens = this.gameCtx.getCheaterTokens();
	this.msgBus.postMessage("DiverDiComponent() '" + this.diverName
		+ "' has " + this.cheaterTokens + " cheater tokens." );
  }

  ngOnInit(){
	  this.msgBus.postMessage("DiverDiComponent::ngOnInit() '" + this.diverName
		  + "' has " + this.cheaterTokens + " cheater tokens." );
  }

  ngOnChanges( changes ){
  	console.log("DiverDiComponent::ngOnChanges() detected changes: ", changes );
  	this.msgBus.postMessage(`ngOnChanges() changes detected: ` + JSON.stringify(changes) );
  	let name = changes['diverName'];
  	if( name && this.msgBus ){
  		this.msgBus.postMessage(`New value of DiverDi's name: ` + name.currentValue )
  	}
  }


  found() {
    console.log(this.cheaterTokens)
    let numFound = this.tryLuck()
    this.tokensFound += numFound + this.cheaterTokens;
    this.cheaterTokens = 0;//you can't cheat more than once
    this.gameCtx.handleTokenEvent( this.tokensFound )
  }

  lost() {
    let numLost = this.tryLuck();
    this.tokensFound -= numLost + this.cheaterTokens;
    this.cheaterTokens = 0;
    this.gameCtx.handleTokenEvent( this.tokensFound );
  }

  tryLuck(): number {
    if (Math.random() > this.gameCtx.ODDS_AGAINST_DIVER) {
      return Math.floor(Math.random() * this.gameCtx.JACKPOT);
    }
    return 1;
  }
}
