import { Component, OnInit } from '@angular/core';

import {SearchResult} from "../search_result";
import {PriceRange} from "../price_range";
import {SpeedOption} from "../SpeedOption";

import {DataService} from "../data.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  name: string = "";

  priceRanges: PriceRange[] = [];
  speedOptions: SpeedOption[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadPriceRanges();
    this.loadSpeedOptions();
  }

  loadPriceRanges(): void {
    this.priceRanges = this.dataService.getPriceRanges();
  }

  loadSpeedOptions(): void {
    this.speedOptions = this.dataService.getSpeedOptions();
  }

}
