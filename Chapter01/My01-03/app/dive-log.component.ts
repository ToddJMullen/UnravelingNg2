import { Component } from "@angular/core";

@Component({
    selector: "divelog"//html custom tag name
    , templateUrl: "app/dive-log.template.html"
})
export class DiveLogComponent {

    public diveAry:object[] = [];
   
    private _diveStockAry:object[] = [
        {
            site: 'Abu Gotta Ramada',
            location: 'Hurghada, Egypt',
            depth: 72,
            time: 54
        },
        {
            site: 'Ponte Mahoon',
            location: 'Maehbourg, Mauritius',
            depth: 54,
            time: 38
        },
        {
            site: 'Molnar Cave',
            location: 'Budapest, Hungary',
            depth: 98,
            time: 62
        },
        {
          site: 'Moodives',
          location: 'Japam, Montaca',
          depth: 254,
          time: 81
        }
    ];

    private _index:number = 0;


    constructor(){
        // console.log("DiveLogComponent::constructor(), searchBox?", this.searchBox );
    }

    ngOnInit(){
        // console.log("ngOnInit(), searchBox?", this.searchBox );

    }

    public enableAdd():boolean {
        return this._index < this._diveStockAry.length;
    }

    public addDive():void{
        if( this.enableAdd() ){
            this.diveAry.push( this._diveStockAry[this._index++] );
        }
    }

    public clearDives():void{
        this.diveAry = [];
        this._index = 0;
    }



}//DiveLogComponent