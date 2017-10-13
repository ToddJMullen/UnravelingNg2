import { Component } from '@angular/core';
import { Input } from '@angular/core';

import {GameComponent} from "./game.component";

@Component({
  selector: 'yw-diver-coupled',
  templateUrl: 'app/diver-coupled.template.html'
})
export class DiverCoupledComponent {
	/**
	This is a re-implementation of the DiveComponent that uses direct/explicit injection
	of the parent GameController to effect changes within the game's state.
	This is an example of tight coupling.
	*/
	@Input() gameCtx:GameComponent;

	@Input() diverName:string;
	
	cheaterTokens:number;
	tokensFound:number = 0;

	onNgInit(){
		this.cheaterTokens = Math.floor( Math.random() * 10 );
	}

  found() {
    console.log(this.cheaterTokens)
    let numFound = this.gameCtx.tryLuck()
    this.tokensFound += numFound + this.cheaterTokens;
	this.cheaterTokens = 0;//you only get to use them once..
    // this.onTokenEvent.emit(numFound + this.cheaterTokens);
	// rather than emit an event for the GameComponent to catch & handle,
	// we directly invoke its handler
	this.gameCtx.handleTokenEvent( this.tokensFound );
  }

  lost() {
    let numLost = this.gameCtx.tryLuck();
    this.tokensFound -= numLost + this.cheaterTokens;
	this.cheaterTokens = 0;//you only get to use them once..
    // this.onTokenEvent.emit(-numLost + this.cheaterTokens);
	this.gameCtx.handleTokenEvent( this.tokensFound );
  }

}
