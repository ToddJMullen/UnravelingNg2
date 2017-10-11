import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yw-diver',
  templateUrl: 'app/diver.template.html'
})
export class DiverComponent {

	ODDS_AGAINST_DIVER: number = .6;
	JACKPOT: number = 1000;

  @Input() name: string;
  @Output() onTokenEvent = new EventEmitter<number>();
  tokensFound = 0;

  found() {
    let numFound = this.tryLuck()
    this.tokensFound += numFound;
    this.onTokenEvent.emit(numFound);
  }

  lost() {
    let numLost = this.tryLuck();
    this.tokensFound -= numLost;
    this.onTokenEvent.emit(-numLost);
  }

  tryLuck(): number {
    if (Math.random() > this.ODDS_AGAINST_DIVER) {
      return Math.floor(Math.random() * this.JACKPOT);
    }
    return 1;
  }
}
