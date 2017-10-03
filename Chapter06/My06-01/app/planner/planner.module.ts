import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PlannerComponent} from './planner.component';
import {DivePlannerComponent}   from "./dive-planner.component";
import {TourPlannerCommponent}  from "./tour-planner.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [
      PlannerComponent
      ,DivePlannerComponent
      ,TourPlannerCommponent
  ],//Declaration of availability within the module
  exports: [
      PlannerComponent
      ,DivePlannerComponent
      ,TourPlannerCommponent
  ]//declaration that it's to be available to other modules inporting this one
})
export class PlannerModule { }
