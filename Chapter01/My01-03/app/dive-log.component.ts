import { Component } from "@angular/core";

import { DiveEntry }    from "./dive-entry";

@Component({
    selector: "divelog"//html custom tag name
    , templateUrl: "app/dive-log.template.html"
})
export class DiveLogComponent {

    public diveAry:DiveEntry[] = [];
   
    private _index:number = 0;


    constructor(){
        // console.log("DiveLogComponent::constructor(), searchBox?", this.searchBox );
    }

    ngOnInit(){
        // console.log("ngOnInit(), searchBox?", this.searchBox );

    }

    public canAddDive():boolean {
        return this._index < DiveEntry.stockDivesAry.length;
    }

    public addDive():void{
        if( this.canAddDive() ){
            this.diveAry.push( DiveEntry.stockDivesAry[this._index++] );
        }
    }

    public clearDives():void{
        this.diveAry = [];
        this._index = 0;
    }



}//DiveLogComponent