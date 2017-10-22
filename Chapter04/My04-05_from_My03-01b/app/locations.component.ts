import {Component} from "@angular/core";

import {Location} from "./location";
import {LocationApiService} from "./location-api.service";

@Component({
    selector: "my-locations"
    ,templateUrl: "app/locations.template"
    ,styles: [``]
})
export class LocationsComponent{



    constructor( private api:LocationApiService ){
        console.log("LocationsComponent()");
    }


    add(){
        this.backend(-1, () => {
            this.api.addLocation({
                id: 0
                ,displayName: this.locationName
            });
        });
    }//add()


    save(){
        this.backend( this.selectedId, () => {
            this.api.updateLocation({
                idL this.selectedId
                ,displayName: this.locationName
            })
        })
    }//save()

    remove(id:number){
        this.backend(id, () => {
            this.api.removeLocation(id);
        })
    }

    backend( id:number, callback ){

    }
}
