import {Component} from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'yw-diver',
  templateUrl: 'app/diver.template.html'
})
export class DiverComponent {

	ODDS_AGAINST: number = .5;
	JACKPOT:number = 1000;

  @Input() name: string;
  @Output() onTokenFound = new EventEmitter<number>();
  tokensFound = 0;

  found() {
	let numFound = this.tryLuck()
	this.tokensFound += numFound;
	this.onTokenFound.emit(numFound);
  }

  lost() {
    this.tokensFound--;
    this.onTokenFound.emit(-1);
  }

  tryLuck():number{
	  if( Math.random() > this.ODDS_AGAINST ){
		  return Math.floor(Math.random() * this.JACKPOT);
	  }
	  return 1;
  }
}
