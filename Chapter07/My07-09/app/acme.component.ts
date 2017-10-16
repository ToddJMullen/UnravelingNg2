import {Component} from '@angular/core';

@Component({
  selector: 'acme',
  template: `
    <h2>This is the AcmeComponent template h2</h2>
	<p>This is a p followed by the ng-content tag...</p>
    <ng-content></ng-content>
	<p>...This is a p after the ng-content tag</p>
    <ng-content></ng-content>
	<p style='font-size:140%;'>...This is a p after a <b>second</b> ng-content tag</p>
  `
})
export class AcmeComponent {
}
