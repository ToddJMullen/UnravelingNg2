import {Component} from '@angular/core';

@Component({
  selector: 'app-messages',
  template: `
    <div>
      <ng-content select="header"></ng-content>
	  <p>I think the ^^^ ng-content tag above picks the element to use as the start</p>
      <ul>
        <li *ngFor="let msg of messageAry">
          {{msg}}
        </li>
      </ul>
	  <p>...and the one belowe picks the place to end the content injection</p>
      <ng-content select="footer"></ng-content>
    </div>
  `,
  inputs: ['messageAry']
})
export class MessageBoardComponent {
  messageAry: string[] = [];
}
