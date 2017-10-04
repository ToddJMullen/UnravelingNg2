import {Component} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: "buddy-comp"
  ,template: `
<div class="col-xs-6">
<h3>Buddy Component</h3>
</div>
`
  ,styles: [`
.col-xs-6{
background-color: #3f9;
}
`] 
})
export class BuddyComponent{}