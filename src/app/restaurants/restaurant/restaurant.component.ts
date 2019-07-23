import { Component, OnInit, Input } from '@angular/core';
import { Restaurants } from '../restaurants.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantsComponent implements OnInit {

  @Input() restaurant:Restaurants;
  constructor() { }

  ngOnInit() {
  }

}
