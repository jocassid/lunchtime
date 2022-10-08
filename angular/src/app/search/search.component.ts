import { Component, OnInit } from '@angular/core';

import {SearchResult} from "../search_result";
import {PriceRange} from "../price_range";
import {SpeedOption} from "../SpeedOption";

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

  search_result: SearchResult = {
    name: "Jersey Mike's",
    address_line1: "5957 S Sunbury Rd",
    address_line2: "Westerville, OH 43081"
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadPriceRanges();
    this.loadSpeedOptions();
  }

  search(): void {
    console.log('search');
  }

  loadPriceRanges(): void {
    this.priceRanges = this.dataService.getPriceRanges();
  }

  loadSpeedOptions(): void {
    this.speedOptions = this.dataService.getSpeedOptions();
  }

}
