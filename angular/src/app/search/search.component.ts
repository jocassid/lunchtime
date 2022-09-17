import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  price_category: bigint;
  healthy: boolean = false;
  speed_category: bigint;

  constructor() { }

  ngOnInit(): void {
  }

}
