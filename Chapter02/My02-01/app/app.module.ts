import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SiteListComponent} from './site-list.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,//main / parent
    SiteListComponent//child component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
