import { Injectable } from '@angular/core';

import {Location} from "./models";
import {PriceRange} from "./models";
import {SpeedOption} from "./models";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPriceRanges(): PriceRange[] {
    return [
      {id: 1, low: 0, high: 12, cssClass: ''},
      {id: 2, low: 12, high: 20, cssClass: 'searchToggleButtonInclude'},
      {id: 3, low: 20, high: 25, cssClass: 'searchToggleButtonExclude'},
      {id: 4, low: 25, high: 30, cssClass: ''}
    ];
  }

  getSpeedOptions(): SpeedOption[] {
    return [
      {id: 1, name: 'Quick'},
      {id: 2, name: 'Not So Quick'},
      {id: 3, name: 'Slow'},
      {id: 4, name: 'Better Order Drinks'}
    ];
  }

  search(): Location[] {
    return [
      {
        id: 1,
        restaurant: {
          id: 1,
          name: "Jersey Mike's",
          cuisines: []
        },
        street_address: "5957 S Sunbury Rd"
      },
      // address_line2: "Westerville, OH 43081"
      {
        id: 2,
        restaurant: {
          id: 2,
          name: "Chipotle",
          cuisines: []
        },
        street_address: "641 S State St"
      },
      {
        id: 3,
        restaurant: {
          id: 3,
          name: "Layla's Kitchen",
          cuisines: []
        },
        street_address: "6152 Cleveland Ave"
      }
    ];
  }
}
