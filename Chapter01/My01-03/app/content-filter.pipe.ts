import {Pipe, PipeTransform}    from "@angular/core";

@Pipe({name: "contentFilter"})
export class ContentFilterPipe implements PipeTransform{
    transform(value:any[], searchFor:string ):any[]{
        console.log("ContentFilterPipe::transform() ", searchFor );
        if( !searchFor ){ return value; };//no filter value => no filter
        return value.filter( dive => {
            return this.hasIn( dive.site, searchFor )
            || this.hasIn( dive.location, searchFor )
            || this.hasIn( dive.depth, searchFor)
            || this.hasIn( dive.time, searchFor);
        } );
    }//transform

    private hasIn( propertyVal:string, search:string ):boolean{
        let bool:boolean = String(propertyVal).toLowerCase().indexOf(search.toLowerCase()) > -1;
        console.log("ContentFilterPipe::hasIn() ", propertyVal, ", ", search, " ?", bool );
        return bool;
    }

}//ContentFilterPipe
