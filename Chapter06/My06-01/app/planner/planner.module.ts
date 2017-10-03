import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PlannerComponent} from './planner.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [PlannerComponent],//Declaration of availability within the module
  exports: [PlannerComponent]//declaration that it's to be available to other modules inporting this one
})
export class PlannerModule { }
