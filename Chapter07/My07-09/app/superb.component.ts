import {Component} from '@angular/core';

@Component({
  selector: 'superb',
  template: `
    <h1>This is the SuperbComponent template h1</h1>
    <acme>
      <h3>This is the acme inner h3</h3>
      <p>this is the acme inner p</p>
    </acme>
  `
})
export class SuperbComponent {
}
