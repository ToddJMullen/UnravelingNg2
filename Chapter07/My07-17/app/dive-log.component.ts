import {Component, AfterViewInit} from '@angular/core';
import {ViewChild} from "@angular/core";
import {DiveLogEntry} from './dive-log-entry';
import {SearchBoxComponent} from './search-box.component';

@Component({
  selector: 'divelog',
  templateUrl: 'app/dive-log.template.html'
})
export class DiveLogComponent implements AfterViewInit {
  dives = DiveLogEntry.StockDives;

//get a logical handle on the search box input so that it can be bound
//int0 component logic.
  @ViewChild(SearchBoxComponent)
  tiSearch:SearchBoxComponent;

	ngAfterViewInit(){
		if( this.tiSearch ){
			console.log("DiveLogComponent::ngAfterViewinit() found search instance:", this.tiSearch );
		}
	}

	searchFor( str:string ){
		this.tiSearch.searchText = str;
		console.log("DiveLogComponent::searchFor()", str );
	}

}
