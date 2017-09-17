import {NgModule}        from "@angular/core";
import {BrowserModule}    from "@angular/platform-browser";

//business logic
import { DiveLogComponent }    from "./dive-log.component";
import { ContentFilterPipe }    from "./content-filter.pipe";

@NgModule({
    imports: [BrowserModule]
    ,declarations: [//of what's unique about this app
        DiveLogComponent
        ,ContentFilterPipe
    ]
    ,bootstrap: [DiveLogComponent]//which part is the base/root/bootstrap for the rest
})

export class AppModule{
    constructor(){
        console.log("AppModule::constructor()");
    }
}