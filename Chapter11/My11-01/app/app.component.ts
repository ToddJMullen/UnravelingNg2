import {Component, AfterViewInit, OnInit} from '@angular/core';
import {ViewChild} from "@angular/core";
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/do';
import "rxjs/add/operator/filter";

import {MousepadComponent} from "./mousepad.component";

@Component({
  selector: 'yw-app',
  template: `
  MenuPad:<br />
    <div class="container">
      <div class="col-sm-12 menupad"
        (click)="toggleSubscription()"
        id="menupad">
      </div>
      MousePad:<br />
      <mousepad></mousepad>
      <button (click)="resume()"
      [disabled]="!this.mouseComp.isStopped()">Resume</button>
      <log-board [messages]="messages"></log-board>
    </div>
  `,
  styles: [`
    .menupad {
      margin: 24px 0;
      background-color: #e0e0f0;
      border: 1px dotted #808080;
      height: 100px;
    }
    /*.mousepad {
      margin: 24px 5px;
      background-color: #f7f;
      display: block;
      border: 1px dotted #808080;
      height: 300px;
    }*/
  `]
})
export class AppComponent implements AfterViewInit, OnInit {
  messages: any[] = [];
  listener: any;
  move$: Observable<any>;
  counter = 0;

  @ViewChild(MousepadComponent) mouseComp:MousepadComponent;

  log(message: any) {
    this.messages.push(`App #${this.counter} ${message}`)
  }

  ngOnInit(){
    this.log("ngOnInit()")
    // let mousePad = document.getElementById('menupad');
    // this.move$ = Observable
    //               .fromEvent( mousePad, "mousemove" )
    //               .filter( val => this.counter++ % 4 == 0 );
    // this.toggleSubscription()
  }

  ngAfterViewInit() {
    this.subscribe();
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

  subscribe(){
    this.mouseComp.mouseEventStream$.subscribe(
      (me:MouseEvent) => {//value events
        this.counter++
        this.log(`Move (${me.clientX}, ${me.clientY}) <= Pad #${this.mouseComp.counter}`);
      }
      ,() => {//error handler
        this.counter++
        this.log(`<b>Error!</b> <= Pad #${this.mouseComp.counter}`)
      }
      ,() => {//complete handler
        this.counter++
        this.log(`Complete! <= Pad #${this.mouseComp.counter}`)
      }
    );//stream.subscribe()
  }//subscribe()

  resume(){
    if( this.mouseComp.isStopped() ){
      this.log("Resuming...");
      this.mouseComp.createStream();
      this.subscribe();
    }
  }

  toggleSubscription(){
  //   this.log("toggleSubscription()");

  //   if( this.listener ){
  //     this.listener.unsubscribe();
  //     this.listener = null;
  //     this.log("Unsubscribed");
  //   }
  //   else {
  //     this.listener = this.move$.subscribe(
  //       (me:MouseEvent) => {
  //           this.log(`(${me.clientX}, ${me.clientY})`);
  //       }
  //     )
  //     this.log("Listening...")
  //   }
  // }
}