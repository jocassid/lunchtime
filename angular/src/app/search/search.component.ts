import { Component, OnInit } from '@angular/core';
import {SearchResult} from "../search_result";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  price_category: number = 0;
  healthy: boolean = false;
  speed_category: number = 0;

  search_result: SearchResult = {
    name: "Jersey Mike's",
    address_line1: "Something something Sunbury",
    address_line2: "Westerville, OH 43???"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
