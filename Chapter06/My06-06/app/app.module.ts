import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ItemComponent} from './item.component';
import {DiverComponent} from './diver.component';
// import {InventoryService} from './inventory.service';
//import {InventoryService} from "./tracing-inventory.service"
import {TraceService, AdvancedTraceService} from "./trace.service";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    ItemComponent,
    DiverComponent
  ]
   ,providers: [
//	   InventoryService
//	   TraceService//Provide one instance for the whole application
	   {provide: TraceService, useClass: AdvancedTraceService}
   ]
  ,bootstrap: [AppComponent]
})
export class AppModule { }
