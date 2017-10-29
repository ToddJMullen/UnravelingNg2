import {Component} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';

@Component({
  selector: 'divelog',
  templateUrl: 'app/dive-log.template.html'
})
export class DiveLogComponent {
  public dives = DiveLogEntry.StockDives;


  avgTime() {
    let sum = 0.0
    ,numDives = this.dives.length;
    for (var i = 0; i < numDives; i++) {
      sum += this.dives[i].time;
    }
    return sum / numDives;
  }
      
  avgDepth() {
    var sum = 0.0
    ,numDives = this.dives.length;
    for (var i = 0; i < numDives; i++) {
      sum += this.dives[i].depth;
    }
    return sum / numDives;
  }

}
