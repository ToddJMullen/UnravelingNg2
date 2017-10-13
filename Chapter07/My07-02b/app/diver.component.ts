import { Component } from '@angular/core';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';

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

  @Input() diverName:string;
  @Input() cheaterTokens:number;
  @Output() onTokenEvent = new EventEmitter<number>();
  tokensFound:number = 0;

  ngOnInit(){
	  this.cheaterTokens = Math.floor( Math.random() * 10 );
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
