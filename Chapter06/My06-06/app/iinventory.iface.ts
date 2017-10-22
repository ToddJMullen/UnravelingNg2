
export interface IInventory{
    getItems():void;
    hasItem(key:string):boolean;
    toggleItem(key:string, owner:string):void;
}
