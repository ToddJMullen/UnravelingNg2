import {Component} from '@angular/core';

@Component({
  selector: 'yw-game',
  templateUrl: 'app/game.template.html'
})
export class GameComponent {
  targetTokens = 4;
  collected = 0;
  divers = ["Bob", "Cecile", "Jake","Raul","Mondo"]


  getCheaterTokens():number{
  	return Math.floor( Math.random() * this.targetTokens );
  }

  handleTokenEvent(newTokens: number) {
    this.collected += newTokens;
  }
}
