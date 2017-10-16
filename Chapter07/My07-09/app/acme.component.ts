import {Component} from '@angular/core';

@Component({
  selector: 'acme',
  template: `
    <h2>This is the AcmeComponent template h2</h2>
	<div class='box'>This is a div followed by the ng-content tag...
    <ng-content></ng-content>
	...This is the rest of div after the ng-content tag</div>
	<div class='box'>
	This is before a secong ng-content tag
	<ng-content></ng-content>
	...This is after the <b>second</b> ng-content tag</div>
	<p>...So apparently it's only rendered once &amp; in the place of the last occurence.</p>
  `
  ,styles: [`
	.box{border:1px solid red; margin: 5px; padding: 5px;}
`]
})
export class AcmeComponent {
}
