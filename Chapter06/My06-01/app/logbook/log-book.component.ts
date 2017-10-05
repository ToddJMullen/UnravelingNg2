import {Component} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {BorderDirective} from "../thirdparty/giga/border.directive";

@Component({
  selector: "log-book"
  ,template: `
<div class="col-xs-6"
 giga-border="outset" giga-border-px="2" giga-border-color="silver">
<h3>Log Book</h3>
<p>Has Giga BorderDirective applied &amp; imported.</p>
</div>
`
  ,styles: [`
.col-xs-6{
background-color: #f3a;
  }
`]
})
export class LogBookComponent{}
