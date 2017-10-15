import { Component } from '@angular/core';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';

import {MsgBusService} from "./msg-bus.service";

@Component({
  selector: 'yw-diver',
  templateUrl: 'app/diver.template.html'
  ,styles: [`
  yw-diver{
  	background-color:#cff;
  }
  `]
})
export class DiverComponent implements OnInit{

	ODDS_AGAINST_DIVER: number = .6;
	JACKPOT: number = 1000;

	_diverName:string;
	@Input() get diverName():string{
		return this._diverName;
	}
	set diverName( name:string ){
		if( this.diverName == name ){
			this.msgBus.postMessage(`No change to diver name '${name}'. Returning.`);
			return;
		}
		this._diverName = name;
		if( this.msgBus ){
			this.msgBus.postMessage(
				`DiverComponent diverName changed to: '${name}'`
			);
		}

	}

  @Input() cheaterTokens:number;
  @Output() onTokenEvent = new EventEmitter<number>();
  tokensFound:number = 0;

  constructor(
	  private msgBus:MsgBusService
  ){
	  this.msgBus.postMessage(`DiverComponent() '${this.diverName}' has ${this.cheaterTokens} cheater tokens.` );
  }

  ngOnInit(){
	  this.cheaterTokens = Math.floor( Math.random() * 10 );
	  this.msgBus.postMessage(`DiverComponent::ngOnInit() 
	  	'${this.diverName}' has ${this.cheaterTokens} cheater tokens.` );
  }

  found() {
    console.log(this.cheaterTokens)
    let numFound = this.tryLuck()
    this.tokensFound += numFound + this.cheaterTokens;
    this.onTokenEvent.emit(numFound + this.cheaterTokens);
  }

  lost() {
    let numLost = this.tryLuck();
    this.tokensFound -= numLost + this.cheaterTokens;
    this.onTokenEvent.emit(-numLost + this.cheaterTokens);
  }

  tryLuck(): number {
    if (Math.random() > this.ODDS_AGAINST_DIVER) {
      return Math.floor(Math.random() * this.JACKPOT);
    }
    return 1;
  }
}
