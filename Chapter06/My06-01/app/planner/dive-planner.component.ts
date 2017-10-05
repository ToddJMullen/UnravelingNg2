import {Component}  from "@angular/core";

import {BrowserModule} from "@angular/platform-browser";
import {HighlightDirective} from "../thirdparty/acme/highlight.directive";

@Component({
    selector: "dive-planner"
    ,template: `
<div class="col-xs-6"
    acme-highlight="#3a3" acme-cursor="help" >
 <h3>Dive Planner</h3>
</div>
`
    ,styles: [`
.col-xs-6{
background-color: #ef3;
}
`]
})
export class DivePlannerComponent{}
