import {Component} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: "log-book"
  ,template: `
<div class="col-xs-6">
<h3>Log Book</h3>
</div>
`
  ,styles: [`
.col-xs-6{
background-color: #f3a;
  }
`]
})
export class LogBookComponent{}