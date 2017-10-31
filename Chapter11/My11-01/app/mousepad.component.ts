import {Component, Input} from "@angular/core";
import {Subject}    from "rxjs/subject";

@Component({
    selector: "mousepad"
    ,template: `
    <div class="col-xs-12 mousepad"
        (mousemove)="onMouseMove($event)"
        (click)="onClick()">
    </div>
    `
    ,styles: [`
      .mousepad {
        margin: 24px 0;
        background-color: #aed;
        display: block;
        border: 1px inset #a0a0f0;
        height: 100px;
      }
    `]
})
export class MousepadComponent{
    counter:number = 0;
    private eventSource = new Subject<MouseEvent>();
    mouseEventStream$ = this.eventSource.asObservable();

    onMouseMove( me:MouseEvent ){
        this.counter++;
        if( this.counter % 10 == 0 ){
            this.eventSource.next(me);
        }
        if( this.counter % 200 == 0 ){
            this.eventSource.error("error")
        }
    }//onMouseMove()

    onClick(){
        console.log("MousepadComponent::onClick()")
        this.eventSource.complete();
    }



}//MousepadComponent()



