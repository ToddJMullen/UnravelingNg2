import {Injectable, Optional} from "@angular/core";

import {IInventory} from "./iinventory.iface";
import {TraceService} from "./trace.service";

@Injectable()
export class InventoryPlusTracingService implements IInventory{

	private _items: {[key:string]:string} = {};
	private _defaultOwner:string;

	constructor(
		@Optional() private tracer:TraceService
	){
		console.log("InventoryPlusTracingService()");
		if( this.tracer ){
			tracer.trace("construct()", this );
		}
	}


	getItems(){
		return this._items;
	}


	hasItem(key:string):boolean{
		return !!this._items[key];
	}

	toggleItem( key:string, owner:string ){
		if( this._items[key] ){
			delete this._items[key];
			if( this.tracer ){
				this.tracer.trace("Deleted " + key, this );
			}
		} else {
			this._items[key] = owner;
			if( this.tracer ){
				this.tracer.trace("Added " + key + ", for " + owner, this );
			}
		}
	}

}//InventoryPlusTracingService

