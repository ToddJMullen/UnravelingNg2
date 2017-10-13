import {Component} from '@angular/core';

@Component({
  selector: 'yw-game',
  templateUrl: 'app/game.template.html'
})
export class GameComponent {


	ODDS_AGAINST_DIVER: number = .6;
	JACKPOT: number = 1000;

	targetTokens = 4;
	collected = 0;
	diverAry = ["Bob", "Cecile", "Jake"]
	coupledDiverAry = ["Raul","Mondo"]

	getInstance(){
		return this;
	}

	getCheaterTokens():number{
		return Math.floor( Math.random() * this.targetTokens );
	}

	handleTokenEvent(newTokens: number) {
		console.log("GameComponent::handleTokenEvent(), newTokens:", newTokens );
		this.collected += newTokens;
	}


    tryLuck(): number {
      if (Math.random() > this.ODDS_AGAINST_DIVER) {
        return Math.floor(Math.random() * this.JACKPOT);
      }
      return 1;
    }
}
