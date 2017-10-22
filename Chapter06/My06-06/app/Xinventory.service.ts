import {Injectable} from '@angular/core';

@Injectable()
export class UnventoryService {
  private _items: { [key: string]: string } = {};

  getItems() {
    return this._items;
  }

  hasItem(key: string): boolean {
    return !!this._items[key]
  }

  toggleItem(key: string, owner: string) {
    if (this._items[key]) {
      delete this._items[key];
    }
    else {
      this._items[key] = owner;
    }
  }
}