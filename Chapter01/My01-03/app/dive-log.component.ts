import { Component } from "@angular/core";

@Component({
    selector: "divelog"//html custom tag name
    , templateUrl: "app/dive-log.template.html"
})
export class DiveLogComponent {
   
    public diveAry = [//copied from the examples for speed, but rename for my preference
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


    constructor(){
        // console.log("DiveLogComponent::constructor(), searchBox?", this.searchBox );
    }

    ngOnInit(){
        // console.log("ngOnInit(), searchBox?", this.searchBox );

    }



}//DiveLogComponent