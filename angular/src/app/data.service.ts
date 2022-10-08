import { Injectable } from '@angular/core';

import {PriceRange} from "./price_range";
import {SpeedOption} from "./SpeedOption";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPriceRanges(): PriceRange[] {
    return [
      {id: 1, low: 0, high: 12},
      {id: 2, low: 12, high: 20},
      {id: 3, low: 20, high: 25},
      {id: 4, low: 25, high: 30}
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
}
