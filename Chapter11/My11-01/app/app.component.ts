import {Component, AfterViewInit, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/do';
import "rxjs/add/operator/filter";

@Component({
  selector: 'yw-app',
  template: `
    <div class="container">
      <div class="col-sm-12 mousepad"
        (click)="toggleSubscription()"
        id="mousepad">
      </div>
      <log-board [messages]="messages"></log-board>
    </div>
  `,
  styles: [`
    .mousepad {
      margin: 24px 0;
      background-color: #e0e0f0;
      border: 1px dotted #808080;
      height: 300px;
    }
  `]
})
export class AppComponent implements AfterViewInit, OnInit {
  messages: any[] = [];
  listener: any;
  move$: Observable<any>;
  counter = 0;

  log(message: any) {
    this.messages.push(`${this.counter} message`)
  }

  ngOnInit(){
    this.log("ngOnInit()")
    let mousePad = document.getElementById('mousepad');
    this.move$ = Observable
                  .fromEvent( mousePad, "mousemove" )
                  .filter( val => this.counter++ % 4 == 0 );
    this.toggleSubscription()
  }

  ngAfterViewInit() {
    // let mousepad = document.getElementById('mousepad');
    // let mouseMove$ = Observable
    //   .fromEvent(mousepad, 'mousemove')
    //   .do( (me:MouseEvent) => {
    //     this.log(`(${me.clientX}, ${me.clientY}) Ctrl Key? ${me.ctrlKey}`)
    //   })

    // mouseMove$.subscribe(
    //   // (m: MouseEvent) => { 
    //   //   this.log(`(${m.clientX}, ${m.clientY})`);
    //   // } 
    // );
    // //add a second subscription
    // mouseMove$.subscribe();
  }

  toggleSubscription(){
    this.log("toggleSubscription()");

    if( this.listener ){
      this.listener.unsubscribe();
      this.listener = null;
      this.log("Unsubscribed");
    }
    else {
      this.listener = this.move$.subscribe(
        (me:MouseEvent) => {
            this.log(`(${me.clientX}, ${me.clientY})`);
        }
      )
      this.log("Listening...")
    }
  }
}