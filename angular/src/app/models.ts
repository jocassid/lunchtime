

export interface Restaurant {
  id: number;
  name: string;
  cuisines: Cuisine[];
}


export interface Cuisine {
  id: number;
  name: string;
}


export interface Location{
  id: number;
  restaurant: Restaurant;
  street_address: string;
}


export interface SpeedOption {
  id: number;
  name: string;
}


export interface PriceRange {
  id: number;
  low: number;
  high: number;
  cssClass: string;
}
