import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yw-diver',
  templateUrl: 'app/diver.template.html'
})
export class DiverComponent {

	ODDS_AGAINST_DIVER: number = .6;
	JACKPOT: number = 1000;

  @Input() diverName: string;
  @Input() cheaterTokens:number;
  @Output() onTokenEvent = new EventEmitter<number>();
  tokensFound:number = 0;

  onNgInit(){;
  }

  found() {
    console.log(this.cheaterTokens)
    let numFound = this.tryLuck()
    this.tokensFound += numFound;// + this.cheaterTokens;
    this.onTokenEvent.emit(numFound);
  }

  lost() {
    let numLost = this.tryLuck();
    this.tokensFound -= numLost;// + this.cheaterTokens;
    this.onTokenEvent.emit(-numLost);
  }

  tryLuck(): number {
    if (Math.random() > this.ODDS_AGAINST_DIVER) {
      return Math.floor(Math.random() * this.JACKPOT);
    }
    return 1;
  }
}
