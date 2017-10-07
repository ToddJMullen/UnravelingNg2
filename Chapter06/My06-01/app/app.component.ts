import {Component} from '@angular/core';

//import {DiverComponent} from "./diver/diver.component";

@Component({
  selector: 'yw-app'
    ,template: `
    <div class="container-fluid">
        <h1>Younderwater Portal</h1>
        <yw-planner></yw-planner>
        <log-book></log-book>
        <buddy-comp></buddy-comp>
        <inventory></inventory>

        <diver *ngFor="let diver of diverAry"
                [name]="diver"
                [itemAry]="itemAry">
        </diver>

    </div>
  `
})
export class AppComponent {

    diverAry = ["Bill","Susie","Raul","Lindsey"];
    itemAry = ["Shark Sandwiches","Shark Juice","Banana","Knife"];

}


