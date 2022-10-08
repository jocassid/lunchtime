import { Component, OnInit } from '@angular/core';

import {Location} from "../models";
import {PriceRange} from "../models";
import {SpeedOption} from "../models";

import {DataService} from "../data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  price_category: number = 0;
  healthy: boolean = false;
  speed_category: number = 0;

  priceRanges: PriceRange[] = [];
  speedOptions: SpeedOption[] = [];

  locations: Location[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadPriceRanges();
    this.loadSpeedOptions();
  }

  togglePriceRange(priceRange: PriceRange): void{
    console.log('togglePriceRange');
    // this should cycle PriceRange.cssClass between: 'searchToggleButtonInclude',
    // 'searchToggleButtonExclude' and ''
  }

  getPriceToggleClass(priceRange: PriceRange): string{
    return priceRange.cssClass;
  }

  search(): void {
    console.log('search');
    this.locations = this.dataService.search();
  }

  loadPriceRanges(): void {
    this.priceRanges = this.dataService.getPriceRanges();
  }

  loadSpeedOptions(): void {
    this.speedOptions = this.dataService.getSpeedOptions();
  }

}
