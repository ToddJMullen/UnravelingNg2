import {Component} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {HighlightDirective} from "../thirdparty/acme/highlight.directive";
import {BorderDirective} from "../thirdparty/giga/border.directive";


@Component({
  selector: "buddy-comp"
  ,template: `
<div class="col-xs-6"
    acme-highlight="#37f" acme-cursor="help"
    giga-border="inset" giga-border-px="3" giga-border-color="#000">
<h3>Buddy Component</h3>
<p>Has Giga BorderDirective applied &amp; imported</p>
<p>Has the HighlightDirective applied &amp; imported</p>
</div>
`
  ,styles: [`
.col-xs-6{
background-color: #3f9;
}
`] 
})
export class BuddyComponent{}
