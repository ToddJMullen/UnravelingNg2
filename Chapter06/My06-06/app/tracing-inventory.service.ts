import {Injectable} from "@angular/core";

export interface IInventory{
    getItems():void;
    hasItem(key:string):boolean;
    toggleItem(key:string, owner:string):void;
}


@Injectable()
export class InventoryService implements IInventory {
  
  private  _items: {[key:string]: string} = {};

  getItems(){
      return this._items;
  }
  
  getItem( key ){
    return this._items[key];
  }
  
  hasItem( key ){
    return !!this._items[key];
  }
  
  toggleItem( key:string, owner:string ){
    console.log("toggleItem()", key)
    if( this._items[key] ){
      delete this._items[key];
      return;
    }
    this._items[key] = key;
  }
  
}//InventoryService


@Injectable()
export class TracingInventoryService implements IInventory{
  //define an alternative implementation under a different name
  
  private  _items: {[key:string]: string} = {};

  getItems(){
    //   console.log("TracingInventoryService::getItems(), returning:", this._items );
      return this._items;
  }
  
  getItem( key ){
    console.log("TracingInventoryService::getItem()", key );
    return this._items[key];
  }
  
  hasItem(key: string): boolean {
      let bool = !!this._items[key];
    console.log("TracingInventoryService::hasItem()\n", key, " => ", bool );
    return bool;
  }
  
  toggleItem( key:string, owner:string ){
    // console.log("TracingInventoryService::toggleItem()", key, owner );
    if( this._items[key] ){
      console.log("TracingInventoryService::toggleItem(), deleting: ", key, owner);
      delete this._items[key];
      return;
    }
    console.log("TracingInventoryService::toggleItem(),\nsetting:", key, " => ", owner);
    this._items[key] = owner;
  }
  
  
  
}//TracingInventoryService
