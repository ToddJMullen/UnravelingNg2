import {Component}  from "@angular/core";

@Component({
    selector: "tour-planner"
    ,template: `
<div class='col-xs-6'
    acme-highlight="#3a3" acme-cursor="help" >
<h3>Tour Planner</h3>
<p>Also has highlight applied, but not imported</p>
</div>
`
    ,styles: [`
.col-xs-6{
background-color: #0ef;
}
`]
})
export class TourPlannerComponent{}
