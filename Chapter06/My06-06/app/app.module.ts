import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ItemComponent} from './item.component';
import {DiverComponent} from './diver.component';
// import {InventoryService} from './inventory.service';
//import {InventoryService} from "./tracing-inventory.service"
import {TraceService, AdvancedTraceService} from "./trace.service";
import {OPAQUE_VERSION} from"./opaque-version.token"

//let myInstance = new AdvancedTraceService();
//myInstance.info = "(my manual instance)"


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
	   AdvancedTraceService
       ,{provide: OPAQUE_VERSION, useValue: "v0.12"}
//       ,{provide: AdvancedTraceService, useValue: myInstance}
	   ,{provide: TraceService, useExisting: AdvancedTraceService}
   ]
  ,bootstrap: [AppComponent]
})
export class AppModule { }
