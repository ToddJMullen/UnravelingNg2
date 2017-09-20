import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DiveAppComponent} from './dive-app.component';
import {DiveSiteListComponent} from './dive-site-list.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    DiveAppComponent//main / parent
    ,DiveSiteListComponent//child component
  ],
  bootstrap: [DiveAppComponent]
})
export class DiveAppModule { }
