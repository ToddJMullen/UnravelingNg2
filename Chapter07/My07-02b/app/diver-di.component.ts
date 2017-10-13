import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

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
export class DiverDiComponent {


  @Input() diverName:string;

  cheaterTokens:number;
  tokensFound:number = 0;

  constructor(
  	private gameCtx:GameComponent
  ){
  	console.log("DiverDiComponent()");
  	this.cheaterTokens = this.gameCtx.getCheaterTokens();
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
    if (Math.random() > this.ODDS_AGAINST_DIVER) {
      return Math.floor(Math.random() * this.JACKPOT);
    }
    return 1;
  }
}
